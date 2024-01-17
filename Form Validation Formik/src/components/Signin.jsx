import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import './Signin.scss'
const SignIn = () => {
  const navigate = useNavigate()
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    
    }
   

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }
    
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
  
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
    
      navigate('/home')
   
    },
  });

  return (
    <div className="signin">
      <h1>Form Validation</h1>
      <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="firstname"
         {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{color: 'red', fontFamily: 'sans-serif'}}>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="lastname"
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div  style={{color: 'red', fontFamily: 'sans-serif'}}>{formik.errors.lastName}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div  style={{color: 'red', fontFamily:'sans-serif'}}>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
