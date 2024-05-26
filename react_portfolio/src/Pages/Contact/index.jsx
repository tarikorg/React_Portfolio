import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact.scss';
import axios from 'axios';

const formStructure = {
    name: '',
    email: '',
    title: '',
    description: '',
    access_key: '78520ef3-84c7-4e87-b2ab-1c67fb3e445e',
    subject: 'Message from user'
}

const Contact = () => {
    const [formData, setFormData] = useState(formStructure)

    const handChange = (e) => {
        setFormData(prevData => ({ ...prevData, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        //web3forms submit
        const url = 'https://api.web3forms.com/submit'
        const res = await axios.post(url, formData)
        console.log(res)

        //reset form
        setFormData({ ...formStructure })
    }

    return (
        <>
            <div className="contact-form-container">
                <h1 className="text-center text-light">Contact Me</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label className='text-warning' style={{ fontWeight: 'bold' }}>Name</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handChange}
                            className="form-control-lg"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label className='text-warning' style={{ fontWeight: 'bold' }}>Email address</Form.Label>
                        <Form.Control
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handChange}
                            className="form-control-lg"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formSubject">
                        <Form.Label className='text-warning' style={{ fontWeight: 'bold' }}>Subject Title</Form.Label>
                        <Form.Control
                            id="title"
                            type="text"
                            placeholder="Enter the subject title"
                            value={formData.title}
                            onChange={handChange}
                            className="form-control-lg"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                        <Form.Label className='text-warning' style={{ fontWeight: 'bold' }}> Description</Form.Label>
                        <Form.Control
                            id="description"
                            as="textarea"
                            rows={3}
                            placeholder="Enter the description"
                            value={formData.description}
                            onChange={handChange}
                            className="form-control-lg"
                            required
                        />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit" className='bg-warning '>
                            Submit
                        </Button>
                    </div>
                </Form>

            </div>
            <div className='links d-flex justify-content-center'>
                <a href="https://github.com/tarikorg">GitHub</a>

                <a href="myku1771@gmail.com">Email</a>
            </div>
        </>
    )
}

export default Contact