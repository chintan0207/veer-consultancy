import React, { useContext } from 'react'
import "./LayoutDoc2.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MyContext from '../Context/MyContext';


const LayoutDoc2 = () => {
 
    const {handleupload,handlecontact,handlepayment,setLayout,layout} =useContext(MyContext)
   

    // Form validation schema using Yup
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
        identity: Yup.mixed().required('*Any Identity Proof is required'),
        birth: Yup.mixed().required('*Any Birth Proof is required'),
        address:Yup.mixed().required('*Any Address Proof is required'),
      
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
        identity: null,
        birth: null,
        address:null,

    };

    // Form submission handler
    const onSubmit = (values) => {
        console.log("submit")
        console.log('Form data:', values);  
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
            <div className="form-container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ setFieldValue,validateForm, setTouched  }) => (
                       
                       
                       <Form>

                        {  layout==='personal' &&
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
                onClick={() => handleNextStage(validateForm, setTouched, 'contact', ['name', 'motherName','placeOfBirth','education','employeementType'])}
              >
                Next
              </button>
                        </>
                        }
                     
                        {layout==='contact' &&
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
                onClick={() => handleNextStage(validateForm, setTouched, 'upload', ['email', 'mobileNo','alterMobileNo','policeStation'])}
              >
                Next
              </button>

                            </>
                        }
                    
                             {layout==='upload' &&
                              <>
                                 <div className="form-group">
                                    <div className='label-div'>
                                        <label htmlFor="identity">Upload Identity Proof</label>
                                    </div>
                                    <div className='input-error'>
                                        <input
                                            id="identity"
                                            name="identity"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue('identity', event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="identity" component="div" className="error" />
                                    </div>

                                </div>

                                <div className="form-group">
                                    <div className='label-div'>
                                        <label htmlFor="birth">Upload Birth Proof</label>
                                    </div>
                                    <div className='input-error'>
                                        <input
                                            id="birth"
                                            name="birth"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue('birth', event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="birth" component="div" className="error" />
                                    </div>

                                </div>

                                <div className="form-group">
                                    <div className='label-div'>
                                        <label htmlFor="address">Upload Address Proof</label>
                                    </div>
                                    <div className='input-error'>
                                        <input
                                            id="address"
                                            name="address"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue('address', event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="address" component="div" className="error" />
                                    </div>

                                </div>


                                <button
                type="button"
                onClick={() => handleNextStage(validateForm, setTouched, 'payment', ['identity','birth', 'address'])}
              >
                Next
              </button>
                                </>
                            }

                            {layout==='payment' &&
                              <div>
                                payment

                                <button type='submit'>Pay Now</button>
                              </div>
                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </div>


    )
}

export default LayoutDoc2