import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './passport.scss'
import MyContext from '../Common/Context/MyContext';
import axios from 'axios';

const PassportVerify = () => {

    const { setMsg, setLoading, setSneck } = useContext(MyContext)

    // Initial form values
    const initialValues = {
        birthPlace: "",
        employeementType: "",
        proffession: "",
        education: "",
        policeStation: ""
    };

    const validationSchema = Yup.object({
        birthPlace: Yup.string().required('BirthPlace is required'),
        employeementType: Yup.string().required('EmployeementType is required'),
        proffession: Yup.string().required('Proffession is required'),
        education: Yup.string().required('Education is required'),
        policeStation: Yup.string().required('PoliceStation name is required'),
    });

    const onSubmit = async (values, { resetForm }) => {
        try {
            setLoading(true)
            document.querySelector('body').style.overflow = 'hidden'
            const { data } = await axios.post('http://localhost:3034/passportverify', values)
            console.log(data)
            if (data.success) {
                setMsg(data.message)
                setSneck(true)
                resetForm()
            } else {
                setSneck(true)
                setMsg("something went wrong")
            }
        } catch (error) {
            console.log(error.message)
            setSneck(true)
            setMsg("something went wrong ")
        } finally {
            document.querySelector('body').style.overflow = 'auto'
            setLoading(false)
        }
    }

    return (
        <div className='passport-comp'>

            <div className='passport'>
                <div className='pass'>

                    <div className="panim">
                        <svg className="pentagon-border outer-pentagon" viewBox="0 0 100 100">
                            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
                        </svg>
                        <svg className="pentagon-border inner-pentagon" viewBox="0 0 100 100">
                            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
                        </svg>
                        <svg className="pentagon-border inner1-pentagon" viewBox="0 0 100 100">
                            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
                        </svg>
                        <svg className="pentagon-border inner2-pentagon" viewBox="0 0 100 100">
                            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
                        </svg>
                        <svg className="pentagon-border inner3-pentagon" viewBox="0 0 100 100">
                            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
                        </svg>
                    </div>

                    <div className='pform-container'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form className="passport-form">
                                <div className="form-field">
                                    <label htmlFor="birthPlace">BirthPlace</label>
                                    <Field type="text" id="birthPlace" name="birthPlace" placeholder="Enter Your birthPlace" />
                                    <ErrorMessage name="birthPlace" component="div" className="error" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="employeementType">EmployeementType</label>
                                    <Field as="select" name="employeementType">
                                        <option value="" label="Select Employeement type" />
                                        <option value="Government" label="Government" />
                                        <option value="Private" label="Private" />
                                        <option value="Homemaker" label="Homemaker" />
                                        <option value="Not Employed" label="Not Employed" />
                                        <option value="Others" label="Others" />
                                        <option value="Retired Goverment Servant" label="Retired Goverment Servant" />
                                        <option value="Student" label="Student" />
                                        <option value="Self-Employed" label="Self-Employed" />
                                        <option value="Retired-Private Service" label="Retired-Private Service" />
                                    </Field>
                                    <ErrorMessage name="employeementType" component="div" className="error" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="proffession">Proffession</label>
                                    <Field type="text" id="proffession" name="proffession" placeholder="Proffession" />
                                    <ErrorMessage name="proffession" component="div" className="error" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="education">Education</label>
                                    <Field type="text" id="education" name="education" placeholder="Education" />
                                    <ErrorMessage name="education" component="div" className="error" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="policeStation">PoliceStation</label>
                                    <Field type="text" id="policeStation" name="policeStation" placeholder="PoliceStation" />
                                    <ErrorMessage name="policeStation" component="div" className="error" />
                                </div>
                                <button type="submit" className="psubmit-button">Submit</button>
                            </Form>
                        </Formik>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default PassportVerify