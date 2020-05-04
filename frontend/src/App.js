import React, { useState } from 'react';
import './App.css';
import { Editor } from 'grapesjs-react';

import { apiDomain } from './config'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormCheck from 'react-bootstrap/FormCheck'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';


const App = () => {
  const [editorObj, setEditorObj] = useState(null);
  const [toEmail, setToEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [successAlert, setSuccessAlert] = useState(null);
  const [dangerAlert, setDangerAlert] = useState(null);

  const handleInit = (value) => {
    setEditorObj(value);
  };

  const handleInputEmail = (e) => {
    setToEmail(e.target.value);
  };

  const handleInputSubject = (e) => {
    setSubject(e.target.value);
  };

  const handeleSuccessAlert = (message) => {
    setSuccessAlert(message);
    setTimeout(() => setSuccessAlert(null), 3000);

  };

  const handeleDangerAlert = (errors) => {
    let errorString;
    errors.forEach(element => {
      errorString = ` ${element.error}`
    });
    setDangerAlert(errorString);
    setTimeout(() => setDangerAlert(null), 3000);

  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reloading page
    const getHtml = editorObj.getHtml(); // get html of editor
    const getCss = editorObj.getCss(); // get css of editor
    const addressEmail = toEmail;
    const subjectEmail = subject;

    axios.post(`${apiDomain}/send-test-email/`, {
      to: addressEmail,
      from: "glie@ya.ru",
      subject: subjectEmail,
      css: getCss,
      html: getHtml,
    },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
      .then(res => {
        handeleSuccessAlert('Test Email have been sent.');
        // console.log(res);
        // console.log(res.data);
      })
      .catch(e => {
        handeleDangerAlert(JSON.parse(e.response.data));
      })
  };

  return (
    <div>
      {
        successAlert ?
          <Alert variant='success'>
            {successAlert}
          </Alert>
          : null
      }
      {dangerAlert ?
        <Alert variant='danger'>
          {dangerAlert}
        </Alert> : null
      }
      <Editor
        height="90vh"
        presetType="newsletter"
        onInit={handleInit}
        storageManager={window.storageManager}
      />
      <Container className="p-3">
        <Form
          inline
          onSubmit={handleSubmit}
        >
          <Form.Group className="m-2" controlId="formGroupEmail">
            <Form.Label className="m-2">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onInput={handleInputEmail}
            />
          </Form.Group>
          <Form.Group className="m-2" controlId="formGroupPassword">
            <Form.Label className="m-2">Subject</Form.Label>
            <Form.Control
              placeholder="Subject line for an email"
              onInput={handleInputSubject}
            />
          </Form.Group>
          <FormGroup className="m-2">
            <Button
              type="submit"
              className="btn-dark"
            >
              Send test
        </Button>
          </FormGroup>
        </Form>

      </Container>
    </div>
  );
}

export default App;
