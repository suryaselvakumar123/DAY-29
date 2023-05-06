import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import { Base } from "./Base";
// import { data } from "./data";
// import TextField from '@mui/material/TextField';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export function AddStudent({student,setStudent}){

  const history = useHistory();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [standard, setStandard] = useState('');
  const [subject, setSubject] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!id || !name || !standard || !subject || !address || !email || !contact) {
      alert('Please fill in all fields.');
      return;
    }

    const newStudent = {
      id: parseInt(id),
      name,
      standard: parseInt(standard),
      subject,
      address,
      email,
      contact
    };

   
    setStudent([...student, newStudent]);

    
    history.push('/student');
  };

  return (
    <Base>
      <div>
        <div><h1>Add Student</h1></div>

        <div className="form">
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
              <Form.Control type="number" onChange={(e) => setId(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Name" className="mb-3">
              <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingStandard" label="Standard" className="mb-3">
              <Form.Control type="number" placeholder="Standard" onChange={(e) => setStandard(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingSubject" label="Subject" className="mb-3">
              <Form.Control type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
              <Form.Control type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Batch" className="mb-3">
              <Form.Control type="text" placeholder="Contact" onChange={(e) => setContact(e.target.value)} />
            </FloatingLabel>

            <Button variant="dark" type="submit">
              Add Student
            </Button>
          </Form>
        </div>
      </div>
    </Base>
  );
};