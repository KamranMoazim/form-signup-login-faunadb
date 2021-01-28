import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button } from "@material-ui/core";
import TextError from "./TextError";
import Account from '../components/Account'

var faunadb = require('faunadb'),
  q = faunadb.query;

var adminClient = new faunadb.Client({ secret: "fnAD_7fdDxACADm8t6xyTjNTXTHFaCTppRj6smkK" });

const LoginForm = () => {

  const [isAccount, setIsAccount] = useState(false)
  const [accountValues, setAccountValues] = useState({});


  const showData = async (values) => {
    let result;
    try{
        result = await adminClient.query( q.Get(q.Match(q.Index('user_by_password'), [values.password, values.email])) );

    } catch(err){
      result = err
        console.log(err);
    }
    return result
  };

  const initialValues = {
    email: "",
    password: ""
  };

  const onSubmit = (values, onSubmitProps) => {
    (async () => {
      let data = await showData(values)
      setAccountValues(data);
      if(data){
        setIsAccount(true)
      }
    })()
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required")
      .max(20, "Password should be maximun of 20 characters")
      .min(6, "Password must be atleast of 6 characters")
  });



if (isAccount){
  return <Account result={accountValues} />
}
  


  return (

    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >

      { (formik) => {
        return (
          <Form className="form">

            <h1>Login to your Account</h1>

            <Grid container spacing={3} justify="center">

              <Grid item sm={8} xs={10}>
                <Field
                  name="email"
                  as={TextField}
                  label="E-mail"
                  variant="outlined"
                  helperText={<ErrorMessage name="email" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <Grid item sm={8} xs={10}>
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  variant="outlined"
                  helperText={<ErrorMessage name="password" component={TextError} />}
                  fullWidth
                />
              </Grid>

              <br />

              <Grid item sm={5} xs={8}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={formik.isSubmitting}
                  size="large"
                  fullWidth
                >
                  <span className="submitBtn">Submit</span>
                </Button>
              </Grid>

            </Grid>

          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
