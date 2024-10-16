import React from 'react'
import "./LayoutDoc2.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LayoutDoc2 = () => {

    // Form validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('*Name is required'),
        email: Yup.string().required('*Email is required'),
        mobileNo: Yup.string().required('*MobileNo is required'),
        alterMobileNo: Yup.string().required('*AlterMobileNo is required'),
        placeOfBirth: Yup.string().required('*PlaceOfBirth is required'),
        policeStation: Yup.string().required('*PoliceStation is required'),
        education: Yup.string().required('*Education is required'),
        employeementType: Yup.string().required('*EmployeementType is required'),
        motherName: Yup.string().required('*MotherName is required'),
        adharcard: Yup.mixed().required('*AdharCard is required'),
        pancard: Yup.mixed().required('*PanCard is required'),

    });

    // Initial form values
    const initialValues = {
        name: '',
        email: '',
        mobileNo: '',
        alterMobileNo: '',
        placeOfBirth: '',
        policeStation: '',
        education: '',
        employeementType: '',
        motherName: '',
        adharcard: null,
        pancard: null,

    };

    // Form submission handler
    const onSubmit = (values) => {
        console.log("submit")
        console.log('Form data:', values);
    };
    return (
        <div className='main'>
            <div className="form-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ setFieldValue }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name="name" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mobileNo">Mobile No</label>
                                <Field type="text" id="mobileNo" name="mobileNo" />
                                <ErrorMessage name="mobileNo" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="alterMobileNo">Alternative Mobile No</label>
                                <Field type="text" id="alterMobileNo" name="alterMobileNo" />
                                <ErrorMessage name="alterMobileNo" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="placeOfBirth">Place of Birth</label>
                                <Field type="text" id="placeOfBirth" name="placeOfBirth" />
                                <ErrorMessage name="placeOfBirth" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="policeStation">PoliceStation</label>
                                <Field type="text" id="policeStation" name="policeStation" />
                                <ErrorMessage name="policeStation" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="education">Education</label>
                                <Field as="select" name="education" id="education">
                                    <option value="">Select your education</option>
                                    <option value="7th-10th">7th-10th</option>
                                    <option value="12th">12th</option>
                                    <option value="graduate">Graduate</option>
                                    <option value="post-graduate">PostGraduate</option>
                                </Field>
                                <ErrorMessage name="education" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="employeementType">Employment Type</label>
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

                            <div className="form-group">
                                <label htmlFor="motherName">MotherName</label>
                                <Field type="text" id="motherName" name="motherName" />
                                <ErrorMessage name="motherName" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="adharcard">Upload Aadhaar Card</label>
                                <input
                                    id="adharcard"
                                    name="adharcard"
                                    type="file"
                                    onChange={(event) => {
                                        setFieldValue('adharcard', event.currentTarget.files[0]);
                                    }}
                                />
                                <ErrorMessage name="adharcard" component="div" className="error" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pancard">Upload Pan Card</label>
                                <input
                                    id="pancard"
                                    name="pancard"
                                    type="file"
                                    onChange={(event) => {
                                        setFieldValue('pancard', event.currentTarget.files[0]);
                                    }}
                                />
                                <ErrorMessage name="pancard" component="div" className="error" />
                            </div>

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>


    )
}

export default LayoutDoc2