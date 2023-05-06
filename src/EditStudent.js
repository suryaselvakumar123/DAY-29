
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import { Base } from "./Base";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Student } from "./Student";

export function EditStudent({ student, setStudent }) {
  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const { id } = useParams();

  const history = useHistory();

  const selectedUser = student.find((per) => per.id === id);

  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setStandard(selectedUser.standard);
    setSubject(selectedUser.subject);
    setAddress(selectedUser.address);
    setEmail(selectedUser.email);
    setContact(selectedUser.contact);
  }, []);

  const updateUser = () => {
    // step 1 : collecting new data
    const editIndex = student.findIndex((per) => per.id === id);
    console.log(editIndex);
   
    const editedData = {
      id: idx,
      name,
      standard,
      subject,
      address,
      email,
      contact,
    };
    //updating the user
    student[editIndex] = editedData;
    setStudent([...student]);
    history.push("/student");
  };

  return (
    <Base>
      <div>
        <h1>EditStudent</h1>
        <div className="form">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Enter ID" value={idx} onChange={(event)=>setIdx(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Enter Name" value={name}  onChange={(event)=>setName(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Standard"
                value={standard} onChange={(event)=>setStandard(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Subject"
                value={subject}  onChange={(event)=>setSubject(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}  onChange={(event)=>setAddress(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}  onChange={(event)=>setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label></Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Contact"
                value={contact}  onChange={(event)=>setContact(event.target.value)}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button variant="dark" type="submit" onClick={updateUser}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Base>
  );
}
