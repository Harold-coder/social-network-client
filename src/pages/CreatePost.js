import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required() 
    })

    const onSubmit = (data) => {
        axios.post("https://social-network-harold1415.herokuapp.com/posts", data).then((response) => {
            navigate("/");
        });
    };

    const navigate = useNavigate();


  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <label>Title: </label>
                <ErrorMessage name='title' element="span"/>
                <Field id="inputCreatePost" name="title" placeholder="love bs"/>
                <label>Post: </label>
                <ErrorMessage name='postText' element="span"/>
                <Field id="inputCreatePost" name="postText" placeholder="some bs"/>
                <label>Username:</label>
                <ErrorMessage name='username' element="span"/>
                <Field id="inputCreatePost" name="username" placeholder="Doziie"/>
                <button type='submit'>Create Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost
