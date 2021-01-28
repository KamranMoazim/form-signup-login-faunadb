import React from "react";
import { AccordionSummary, AccordionDetails, Typography, Button, Grid } from "@material-ui/core";
import { Formik, Form } from "formik";

var faunadb = require('faunadb'),
  q = faunadb.query;

var adminClient = new faunadb.Client({ secret: "fnAD_7fdDxACADm8t6xyTjNTXTHFaCTppRj6smkK" });

const Review = ({ formValues, submit }) => {


const saveData = async () => {
    try{
        const result = await adminClient.query(
            q.Create(
                q.Collection('users'),
                { data: { 
                  name: formValues.firstName.concat(formValues.lastName),
                  fatherName: formValues.fatherName,
                  fatherCNIC: formValues.fatherID,
                  age: formValues.age,
                  city: formValues.city,
                  userName: formValues.userName,
                  password: formValues.password,
                  gmail: formValues.emailID,
                  phone: formValues.phoneNumber
                } },
              )
          );
        console.log(result);
    } catch(err){
        console.log(err);
    }
};



  return (
    <Formik
      initialValues={formValues}
      onSubmit={(values) => {
        alert("Your Account has created!");
        window.location.reload(true);
        saveData()
        submit(0);
      }}
    >
      <Form className="form_Content">
        <h1>Review</h1>
        <Grid container spacing={3} justify="center">
          <Grid item sm={8} xs={11}>

              <AccordionSummary className="review_Accordion">
                <Typography variant="h4">Personal Information</Typography>
              </AccordionSummary>

              <AccordionDetails className="review_Content">
                <p>Name </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.firstName.concat(formValues.lastName)}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Father Name </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.fatherName}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Father CNIC </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.fatherID}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Age </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.age}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>City </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.city}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Phone Number </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.phoneNumber}</p>
              </AccordionDetails>

          </Grid>

          <Grid item sm={8} xs={11}>

              <AccordionSummary>
                <Typography variant="h4">Account Information</Typography>
              </AccordionSummary>

              <AccordionDetails className="review_Content">
                <p>Email ID </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.emailID}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>User Name </p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.userName}</p>
              </AccordionDetails>

              <AccordionDetails className="review_Content">
                <p>Password</p>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p>{formValues.password}</p>
              </AccordionDetails>

          </Grid>

        </Grid>

        <div className="buttons">

          <Button variant="contained" color="primary" onClick={() => submit(1)}>
            Back
          </Button>

          <Button variant="contained" color="primary" type="submit">
            Create Account
          </Button>

        </div>
        
      </Form>
    </Formik>
  );
};

export default Review;
