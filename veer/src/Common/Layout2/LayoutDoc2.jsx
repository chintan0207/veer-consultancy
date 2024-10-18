import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LayoutDoc2.scss'
const LayoutDoc2 = () => {

    const [layout, setLayout] = useState('stage1');

    // Validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('*Name is required'),
        motherName: Yup.string().required('*MotherName is required'),
        placeOfBirth: Yup.string().required('*PlaceOfBirth is required'),
        education: Yup.string().required('*Education is required'),
        employeementType: Yup.string().required('*EmployeementType is required'),
        email: Yup.string().required('*Email is required'),
        mobileNo: Yup.string().required('*MobileNo is required'),
        alterMobileNo: Yup.string().required('*AlterMobileNo is required'),
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
        email: '',
        mobileNo: '',
        alterMobileNo: '',
        policeStation: '',
        identityProof: null,
        birthProof: null,
        addressProof: null
    };

    // Handle form submission
    const handleSubmit = (values) => {
        alert(JSON.stringify(values))
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
                    {({ validateForm, setTouched }) => (

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
                                            <Field type="text" id="name" name="name" />
                                            <ErrorMessage name="name" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="motherName">MotherName (optional)</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="motherName" name="motherName" />
                                            <ErrorMessage name="motherName" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="placeOfBirth">Place of Birth</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="placeOfBirth" name="placeOfBirth" />
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


                                    <button
                                        type="button"
                                        onClick={() => handleNextStage(validateForm, setTouched, 'stage2', ['name', 'motherName', 'placeOfBirth', 'education', 'employeementType'])}
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
                                            <Field type="email" id="email" name="email" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="mobileNo">Mobile No</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="mobileNo" name="mobileNo" />
                                            <ErrorMessage name="mobileNo" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="alterMobileNo">Alternative Mobile No </label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="alterMobileNo" name="alterMobileNo" />
                                            <ErrorMessage name="alterMobileNo" component="div" className="error" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label htmlFor="policeStation">PoliceStation</label>
                                        </div>
                                        <div className='input-error'>
                                            <Field type="text" id="policeStation" name="policeStation" />
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
                                            <Field type="file" name="identityProof" />
                                            <ErrorMessage name="identityProof" component="div" className="error" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label>BirthProof:</label>
                                        </div>
                                        <div className="input-error">
                                            <Field type="file" name="birthProof" />
                                            <ErrorMessage name="birthProof" component="div" className="error" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className='label-div'>
                                            <label>AddressProof:</label>
                                        </div>
                                        <div className="input-error">
                                            <Field type="file" name="addressProof" />
                                            <ErrorMessage name="addressProof" component="div" className="error" />
                                        </div>
                                    </div>


                                    <button type="submit" className="bg-blue-500 text-white p-2 mt-4">
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