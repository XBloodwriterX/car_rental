import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";
import {ClientOutputProps} from "../types";
import '../styles/ClientsPage.scss'
import axios from "axios";
import Header from "../components/Header";

const ClientsPage = () => {
    let [details, setDetails] = useState<ClientOutputProps[]>()

    useEffect(() => {
        axios.get<ClientOutputProps[]>('http://localhost:8000/clients/')
            .then(res => {
                console.log('Got data '+res.data)
                setDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            });
    }, []);


    return (
        <div className="page clients-page">
            <Header />
            <h1>All Clients:</h1>
            <hr />
            <ul>
                {details?.map((data, id) => (
                    <li key={id}>
                        <h1>{data.id}. {data.first_name} {data.last_name}</h1>
                        <p>Age: {data.age}</p>
                        <p>PESEL: {data.PESEL}</p>
                        <p>Telephone number: <a href={"tel:"+data.telephone_number}>{data.telephone_number}</a></p>
                        <p>Email: <a href={"mailto:"+data.email}>{data.email}</a></p>
                        <p>Locality: {data.locality}</p>
                        <p>Street: {data.street}</p>
                        <p>Zip code: {data.zip_code.slice(0, 2) + "-" + data.zip_code.slice(2, 5)}</p>
                        <p>Notes: {data.notes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientsPage;