import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Router } from "react-router-dom";
import axios from 'axios';
import  { useNavigate } from 'react-router-dom';

const Formular = () => {
const navigate = useNavigate();
const formik = useFormik({
  initialValues: {
    name: '',
    email: '',
    nazovFirmy: '',
    titul: '',
    message: ''
  },

  validationSchema: Yup.object({
    name: Yup.string().required('Povinné pole'),
    email: Yup.string().email('Neplatná emailová adresa').required('Povinné pole'),
    message: Yup.string().required('Povinné pole')
  }),

  onSubmit: async (values, { setSubmitting, resetForm }) => {
    // Use Axios to send a POST request
    try {
      const response = await axios.post('http://localhost:5500/send-email', values);
      console.log(response.data);
      setTimeout(() => {
        navigate('/success'); // Navigate to the success page
        
        // Set another timeout to go back to the contact page after 3 seconds
        setTimeout(() => {
          navigate('/contact');
        }, 3000); // 3000 milliseconds = 3 seconds
      }, 500);
    } catch (error) {
      console.error(error);
      // Handle the error as needed, e.g., show an error message
    }
    setSubmitting(false); // Set submitting to false after the form is handled
    resetForm(); // Optionally reset the form to initial values
  }
});


  return(
  <section className="h-full">
    <form onSubmit={formik.handleSubmit} className="flex flex-col h-full justify-between">
      <div className="flex flex-col font-livvic text-primary-100 gap-4">
        
        <label htmlFor="name" className="hidden">Meno</label>
        <input 
        type="text" 
        id="name" 
        className="bg-transparent border-b-2 py-6 px-2 focus:outline-none cursor-pointer " placeholder="Meno"
        value={formik.values.name}
        onChange={formik.handleChange}
        />

        <label htmlFor="email" className="hidden">Email</label>
        <input 
        type="email" 
        id="email" 
        placeholder="Emailová adres" 
        className="bg-transparent border-b-2 py-6 px-2 focus:outline-none cursor-pointer" 
        value={formik.values.email}
        onChange={formik.handleChange}
        />

        <label htmlFor="nazovFirmy" className="hidden">Názov spoločnosti</label>
        <input 
        type="text" 
        id="nazovFirmy" 
        placeholder="Názov spoločnosti - voliteľné" 
        className="bg-transparent border-b-2 py-6 px-2 focus:outline-none cursor-pointer"
        value={formik.values.nazovFirmy}
        onChange={formik.handleChange}
        />

        <label htmlFor="titul" className="hidden">Titul</label>
        <input 
        type="text" 
        id="titul" 
        placeholder="Titul - voliteľné" 
        className="bg-transparent border-b-2 py-6 px-2 focus:outline-none cursor-pointer"
        value={formik.values.titul}
        onChange={formik.handleChange}
        />

        <label htmlFor="message" className="hidden">Správa</label>
        <textarea 
        name=""
        id="message" 
        cols="30" 
        rows="3" 
        placeholder="Správa" 
        className="bg-transparent border-b-2 py-6 px-2 focus:outline-none cursor-pointer"
        value={formik.values.message}
        onChange={formik.handleChange}
        ></textarea>
      </div>

      <button className="py-4 px-6 bg-primary-100 rounded-full mt-6 font-bold text-primary-700 self-start " type="submit">
        Odoslať
      </button>
    </form>
  </section>
  );
}

export default Formular