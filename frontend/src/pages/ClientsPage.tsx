import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";
import {OutputProps} from "../types";
import axios from "axios";

const ClientsPage = () => {
    let [details, setDetails] = useState<OutputProps[]>()

    useEffect(() => {
        axios.get<OutputProps[]>('http://localhost:8000/clients/')
            .then(res => {
                console.log('Got data '+res.data)
                setDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);


    return (
        <main>
            <h1>All Clients:</h1>
            <hr/>
            {details?.map((data, id) => (
                <div key={id}>
                    <h1>{data.id}. {data.first_name} {data.last_name}</h1>
                    <p>Age: {data.age}</p>
                    <p>PESEL: {data.PESEL}</p>
                    <p>Telephone number: {data.telephone_number}</p>
                    <p>Email: <a href={"mailto:"+data.email}>{data.email}</a></p>
                    <p>Locality: {data.locality}</p>
                    <p>Street: {data.street}</p>
                    <p>Zip code: {data.zip_code}</p>
                    <p>Notes: {data.notes}</p>
                </div>
            ))}
        </main>
    );
};

export default ClientsPage;