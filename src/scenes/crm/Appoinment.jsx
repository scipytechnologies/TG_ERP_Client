import React, { useEffect } from 'react'
import { useState } from 'react';
import mainservice from '../../services/mainservice';

function Appoinment() {

    const [user, setUser] = useState("")
    async function appointmentDetails() {
        const res = await mainservice.appointmentDetails();
        console.log('Appointment Details ' + JSON.stringify(res))
    }
    useEffect(() => {
      appointmentDetails()
    }, []);

    return (
        <div>Appoinment</div>
    )
}

export default Appoinment;