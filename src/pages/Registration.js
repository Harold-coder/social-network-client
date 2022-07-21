import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const Registration = () => {
    const initialValues = {
        username: "",
        postpasswordText: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    const onSubmit = (data) => {
        axios.post("https://social-network-harold1415.herokuapp.com/auth", data).then(() => {
            navigate("/login");
        });
    };


  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Username:</label>
                <ErrorMessage name='username' element="span"/>
                <Field id="inputCreatePost" name="username" placeholder="Doziie"/>

                <label>Password:</label>
                <ErrorMessage name='password' element="span"/>
                <Field id="inputCreatePost" name="password" placeholder="password"/>
                <button type='submit'>Create Account</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Registration
