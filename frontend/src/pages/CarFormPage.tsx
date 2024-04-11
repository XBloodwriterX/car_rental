import React, {ChangeEvent, FormEvent, useState} from 'react';
import Header from "../components/Header";
import {Button, Card, Form, FormGroup, Input, Label} from "reactstrap";
import {CarInputProps} from "../types";

const CarFormPage = () => {
    const [carData, setCarData] = useState<CarInputProps>()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setCarData({
            ...carData as CarInputProps,
            [e.target.name]: value
        })
        localStorage.setItem("carFormData", JSON.stringify(carData))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=> {

    }

    return (
        <div className="page car-page">
            <Header />
            <Card style={{
                width: "40rem",
                padding: "1rem"
            }}>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="carLicencePlate">
                            Licence Plate
                        </Label>
                        <Input
                            id="carLicencePlate"
                            name="licence_plate"
                            placeholder=""
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="carMark">
                            Mark
                        </Label>
                        <Input
                            id="carMark"
                            name="mark"
                            placeholder=""
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="carModel">
                            Model
                        </Label>
                        <Input
                            id="carModel"
                            name="model"
                            placeholder=""
                            type="text"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="carVIN">
                            VIN
                        </Label>
                        <Input
                            id="carVIN"
                            name="VIN"
                            placeholder=""
                            type="text"
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            size={5}
                        />
                    </FormGroup>
                    <Button type="submit" color="primary">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default CarFormPage;