import React, {Component, FormEvent, ChangeEvent} from 'react';
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Card} from "reactstrap";

interface InputProps {
    first_name: string,
    last_name: string,
    age: string,
    PESEL: string,
    telephone_number: string,
    email: string,
    locality: string,
    street: string,
    zip_code: string,
}

/*interface OutputProps {
    id: number,
    first_name: string,
    last_name: string,
    age: number,
    PESEL: string,
    telephone_number: string,
    email: string,
    locality: string,
    street: string,
    zip_code: string,
    notes: string
}*/

class ClientFormPage extends Component {
    state = {
        details: [],
        data: {
            first_name: "",
            last_name: "",
            age: "",
            PESEL: "",
            telephone_number: "",
            email: "",
            locality: "",
            street: "",
            zip_code: "",
        }
    }
    componentDidMount() {
        console.log(this.state.data)
        let data;
        axios.get('http://localhost:8000/clients/')
        .then(res => {
            data = res.data;
            this.setState({
                details: data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: value
            }
        })
        console.log(this.state.data)
    }

    handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userData: InputProps  = this.state.data;
        await axios.post('http://localhost:8000/clients/', userData, {
            headers: {
                'Content-Type': 'application/json'
            }}
        )
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    }

    render() {
        return (
            <Card style={{
                width: "40rem",
                padding: "1rem",
                // margin: "1rem"
            }}>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="clientFirstName">
                            First Name
                        </Label>
                        <Input
                            id="clientFirstName"
                            name="first_name"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientLastName">
                            Last Name
                        </Label>
                        <Input
                            id="clientLastName"
                            name="last_name"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientAge">
                            Age
                        </Label>
                        <Input
                            id="clientAge"
                            name="age"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientPESEL">
                            PESEL
                        </Label>
                        <Input
                            id="clientPESEL"
                            name="PESEL"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                            size={11}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientTelephoneNumber">
                            Telephone Number
                        </Label>
                        <Input
                            id="clientTelephoneNumber"
                            name="telephone_number"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                            size={9}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientEmail">
                            Email
                        </Label>
                        <Input
                            id="clientEmail"
                            name="email"
                            placeholder=""
                            type="email"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientLocality">
                            Locality
                        </Label>
                        <Input
                            id="clientLocality"
                            name="locality"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientStreet">
                            Street
                        </Label>
                        <Input
                            id="clientStreet"
                            name="street"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="clientZipCode">
                            Zip Code
                        </Label>
                        <Input
                            id="clientZipCode"
                            name="zip_code"
                            placeholder=""
                            type="text"
                            onChange={this.handleChange}
                            size={5}
                        />
                    </FormGroup>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        );
    }
}

export default ClientFormPage;