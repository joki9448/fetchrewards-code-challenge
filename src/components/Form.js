import React, { useState } from 'react';
import Occupations from './Occupations';

function Form () {
    // useState
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);

    const []
    
    // Occupations and States GET requests
    const requestOccupations = async () => {
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form');
        let res = await req.json();
        setOccupations(res.occupations)
    }
    const requestStates = async () => {
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form');
        let res = await req.json();
        setStates(res.states);
    }

    // Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        });
    }

    return (
        <section className="form-section">
            <h1>This is the form</h1>
            {/* <button onClick={requestOccupations}>Request Occupations</button>
            <button onClick={requestStates}>Request States</button> */}

            <form className="form" onSubmit={handleSubmit}>
                <label for="fullname">Full Name:</label>
                <input type="text"></input>

                <label for="email">Email Address:</label>
                <input type="email"></input>

                <label for="password">Password:</label>
                <input type="password"></input>

                <label for="occupation">Occupation:</label>
                <input></input>

                <label for="state">State:</label>
                <input></input>

                <button>Submit</button>
            </form>
        </section>
    )
}

export default Form;