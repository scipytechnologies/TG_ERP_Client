import React, { useEffect } from 'react'
import { useState } from 'react';
import mainservice from '../../services/mainservice';

function Opportunity() {

    const [user, setUser] = useState("")
    async function opportunityDetails() {
        const res = await mainservice.opportunityDetails();
        console.log('Opportunity Details ' + JSON.stringify(res))
    }
    useEffect(() => {
      opportunityDetails()
    }, []);

    return (
        <div>Opportunity</div>
    )
}

export default Opportunity;