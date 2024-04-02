import React, {useEffect, useState} from 'react';
import {Button} from "reactstrap";

const ClientsPage = () => {
    let [count, setCount] = useState(0)


    useEffect(() => {
    console.log('effect')
    }, []);
    return (
        <main>
            <h1>All Clients:</h1>
            <hr/>
            <Button onChange={() => setCount(count+1)}></Button>
        </main>
    );
};

export default ClientsPage;