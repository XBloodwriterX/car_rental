import React, {useEffect} from 'react';
import Header from "../components/Header";
import axios from "axios";

const HomePage = () => {

    useEffect(() => {
        axios.get('https://api2.alphaex.net/images/user/kyc/1630490172611_16382_2e59e55e4b0d3185100119a00b1c9749_1.jpg')
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    return (
        <div className="page home-page">
            <Header />
        </div>
    );
};

export default HomePage;