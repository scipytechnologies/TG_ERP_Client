import React, { useEffect } from 'react'
import { useState } from 'react';
import mainservice from '../../services/mainservice';

function Customer() {

    const [user, setUser] = useState("")
    async function customerDetails() {
        const res = await mainservice.customerDetails();
        console.log('Customer Details ' + JSON.stringify(res))
    }
    useEffect(() => {
        customerDetails()
    }, []);

    return (
        <div>Customer</div>
    )
}

export default Customer;