import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import './Signup.css';

const Signup = () => {

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            confirmpassword:""
    
        },
        validationSchema:Yup.object({
            name:Yup.string().min(5)
            .max(15,"Must be 15 characters or less")
            .required("Name is required"),
            email:Yup.string().email().required("Email required"),
            password:Yup.string().min(5).required("Required"),
            confirmpassword:Yup.string().required("Required")
            .oneOf([Yup.ref("password"),null],"Password must match")


        }),
        onSubmit:(values)=>{
            console.log(values)

        },
    
    })
    

	return (
		
			<form>
                <h2>create account</h2>

                <div className='input-container'>
         
                 
                <input type="text" name ="name" id ="name"
                 placeholder="Name" 
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.name} />
                 {formik.touched.name && formik.errors.name ?<p>name min 2, max 15 characters</p>:null}
                 
                 </div>

                 <div className='input-container'>
   <input type = "email" name = "email"id="email" 
   placeholder='email'
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   value= {formik.values.email} />
   {formik.touched.email && formik.errors.email?<p>Please enter your email</p>:null}
   </div>

   <div className='input-container'>
  <input type = "password"name="password"id='password' placeholder='password'
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.password} />
  {formik.touched.password && formik.errors.password?<p>Enter password</p>:null}
  </div>

  <div className='input-container'>
  <input type="password" name="confirmpassword"
  id='confirmpassword' placeholder='confirm password'
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.confirmpassword} />
  {formik.touched.confirmpassword && formik.errors.confirmpassword?<p>confirm password is required field</p>:null}
  </div>
<div className='input-container'>
<button type = "submit">Signup</button>

</div>
  


</form>
		
	);
}

export default Signup;
