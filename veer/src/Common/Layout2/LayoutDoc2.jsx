import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LayoutDoc2.scss'
import MyContext from '../Context/MyContext';
const LayoutDoc2 = () => {

    const { setDetailFormData,setAmount,handleupi } = useContext(MyContext);
    const [layout, setLayout] = useState('stage1');

    // Validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('*Name is required'),
        motherName: Yup.string(),
        placeOfBirth: Yup.string().required('*PlaceOfBirth is required'),
        education: Yup.string().required('*Education is required'),
        employeementType: Yup.string().required('*EmployeementType is required'),
        serviceType: Yup.string().required("*Required"),
        email: Yup.string().required('*Email is required'),
        mobileNo: Yup.string().matches(/^[0-9]{10}$/, '**Mobile number is not valid').required('*MobileNo is required'),
        alterMobileNo: Yup.string(),
        policeStation: Yup.string().required('*PoliceStation is required'),
        identityProof: Yup.mixed().required('*Any Identity Proof is required'),
        birthProof: Yup.mixed().required('*Any Birth Proof is required'),
        addressProof: Yup.mixed().required('*Any Address Proof is required'),

    });

    // Initial form values
    const initialValues = {
        name: '',
        motherName: '',
        placeOfBirth: '',
        education: '',
        employeementType: '',
        serviceType: '',
        email: '',
        mobileNo: '',
        alterMobileNo: '',
        policeStation: '',
        identityProof: null,
        birthProof: null,
        addressProof: null
    };

    // Handle form submission
    const handleSubmit = async (values, { resetForm }) => {
        // alert(JSON.stringify(values))

        if (values.serviceType === 'tatkal') {
            setAmount(3000)
        } else (
            setAmount(1)
        )
        setDetailFormData(values)
        localStorage.setItem('formdata', JSON.stringify(values))
     


    };

    // Handle stage navigation with validation
    const handleNextStage = (validateForm, setTouched, currentStage, nextStageFields) => {
        validateForm().then((errors) => {
            if (Object.keys(errors).some(field => nextStageFields.includes(field))) {
                setTouched(nextStageFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));
            } else {

                setLayout(currentStage);
            }
        });
    };

    return (

        <div className='main'>
            <div className='form-container'>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ validateForm, setTouched, values }) => (

                        <Form>
                            {
                                layout === 'stage1' &&
                                <>
                                    <h2>Personal Details</h2>
                                    <div className="form-group ">
                                        <div className='label-div'>
                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="name" name="name" placeholder="Enter your name" />
                                            <ErrorMessage name="name" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="motherName">MotherName (optional)</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="motherName" name="motherName" placeholder="Enter mother's name" />
                                            <ErrorMessage name="motherName" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="placeOfBirth">Place of Birth</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="placeOfBirth" name="placeOfBirth" placeholder="Enter place of birth"  />
                                            <ErrorMessage name="placeOfBirth" component="div" className="error" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="education">Education</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field as="select" name="education" id="education">
                                                <option value="">Select your education</option>
                                                <option value="7th-10th">less than 7th</option>
                                                <option value="12th">10th-12th</option>
                                                <option value="graduate">Graduate</option>
                                                <option value="post-graduate">PostGraduate</option>
                                            </Field>
                                            <ErrorMessage name="education" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="employeementType">Employment Type</label>
                                        </div>
                                        <div className='input-error'>

                                            <Field as="select" name="employeementType" id="employeementType">
                                                <option value="">Employment Type</option>
                                                <option value="Government">Government</option>
                                                <option value="Private">Private</option>
                                                <option value="Homemaker">Homemaker</option>
                                                <option value="Not Employed">Not Employed</option>
                                                <option value="Others">Others</option>
                                                <option value="Retired Goverment Servant">Retired Government Servant</option>
                                                <option value="Student">Student</option>
                                                <option value="Self-Employed">Self-Employed</option>
                                                <option value="Retired-Private Service">Retired-Private Service</option>
                                            </Field>
                                            <ErrorMessage name="employeementType" component="div" className="error" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="label-div">
                                            <label htmlFor="serviceType">Service Type</label>
                                        </div>
                                        <div className="radio-group">
                                            <label>
                                                <Field
                                                    type="radio"
                                                    name="serviceType"
                                                    value="normal"
                                                // checked="normal"
                                                />
                                                Normal
                                            </label>
                                            <label>
                                                <Field
                                                    type="radio"
                                                    name="serviceType"
                                                    value="tatkal"
                                                />
                                                Emergency
                                            </label>
                                        </div>
                                        <ErrorMessage name="serviceType" component="div" className="error" />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => handleNextStage(validateForm, setTouched, 'stage2', ['name', 'motherName', 'placeOfBirth',
                                            'serviceType', 'education', 'employeementType'])}
                                    >
                                        Next
                                    </button>
                                </>
                            }

                            {
                                layout === 'stage2' &&
                                <>
                                    <h2>Contact Details</h2>
                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="email" id="email" name="email" placeholder="Enter your email" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="mobileNo">Mobile No</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="mobileNo" name="mobileNo" placeholder="Enter your mobile number" />
                                            <ErrorMessage name="mobileNo" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="alterMobileNo">Alternative Mobile No </label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="alterMobileNo" name="alterMobileNo" placeholder="Enter your alternative mobile number" />
                                            <ErrorMessage name="alterMobileNo" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="policeStation">PoliceStation</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="policeStation" name="policeStation" placeholder="Enter your area police station"/>
                                            <ErrorMessage name="policeStation" component="div" className="error" />
                                        </div>
                                    </div>


                                    <button
                                        type="button"
                                        onClick={() => handleNextStage(validateForm, setTouched, 'stage3', ['email', 'mobileNo', 'alterMobileNo', 'policeStation'])}
                                    >
                                        Next
                                    </button>
                                </>
                            }

                            {
                                layout === 'stage3' &&
                                <>
                                    <h2>Upload Document</h2>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label>IdentityProof:</label>
                                        </div>
                                        <div className="input-error">
                                            <Field
                                                name="identityProof"
                                                render={({ field, form }) => (
                                                    <input
                                                        type="file"
                                                        onChange={(event) => form.setFieldValue("identityProof", event.currentTarget.files[0])}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage name="identityProof" component="div" className="error" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label>BirthProof:</label>
                                        </div>
                                        <div className="input-error">
                                            <Field
                                                name="birthProof"
                                                render={({ field, form }) => (
                                                    <input
                                                        type="file"
                                                        onChange={(event) => form.setFieldValue("birthProof", event.currentTarget.files[0])}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage name="birthProof" component="div" className="error" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label>AddressProof:</label>
                                        </div>
                                        <div className="input-error">
                                            <Field
                                                name="addressProof"
                                                render={({ field, form }) => (
                                                    <input
                                                        type="file"
                                                        onChange={(event) => form.setFieldValue("addressProof", event.currentTarget.files[0])}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage name="addressProof" component="div" className="error" />
                                        </div>
                                    </div>

                                    <button type="button"
                                        onClick={() => handleNextStage(validateForm, setTouched, 'stage4', ['identityProof', 'birthProof', 'addressProof'])}
                                    >
                                        Next
                                    </button>
                                </>
                            }

                            {
                                layout === 'stage4' &&
                                <>
                                    <h2>Preview the Details</h2>
                                    <div className="preview-section">
                                        <div className='details'>
                                            <div className='stype-amount'>
                                                <p><strong>ServiceType :</strong> {values.serviceType}</p>
                                                <p><strong>Amount to be Paid :</strong> {values.serviceType === "tatkal" ? 3000 : 1}</p>
                                            </div>
                                            <p><strong>Name:</strong> {values.name}</p>
                                            <p><strong>Mother's Name:</strong> {values.motherName}</p>
                                            <p><strong>Place of Birth:</strong> {values.placeOfBirth}</p>
                                            <p><strong>Education:</strong> {values.education}</p>
                                            <p><strong>Employment Type:</strong> {values.employeementType}</p>

                                        </div>
                                        <div className='details'>
                                            <p><strong>Email:</strong> {values.email}</p>
                                            <p><strong>Mobile No:</strong> {values.mobileNo}</p>
                                            <p><strong>Alternative Mobile No:</strong> {values.alterMobileNo}</p>
                                            <p><strong>Police Station:</strong> {values.policeStation}</p>
                                        </div>

                                        <div className='details'>
                                            <div className=''>
                                                <p><strong>Identity Proof:</strong> {values.identityProof ? values.identityProof.name : 'Not uploaded'}</p>
                                                <p><strong>Birth Proof:</strong> {values.birthProof ? values.birthProof.name : 'Not uploaded'}</p>
                                                <p><strong>Address Proof:</strong> {values.addressProof ? values.addressProof.name : 'Not uploaded'}</p>
                                            </div>

                                        </div>

                                    </div>
                                   
                                    <button type="submit" onClick={handleupi}
                                    >
                                        Submit
                                    </button>
                                </>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
};

export default LayoutDoc2;