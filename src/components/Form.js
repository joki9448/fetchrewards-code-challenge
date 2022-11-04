import React, { useState } from 'react';
import Occupations from './Occupations';

function Form () {
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);
    // console.log('occupations useState:', occupations)
    // console.log('states useState:', states)

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
    
    return (
        <section className="form-section">
            <h1>This is the form</h1>
            {/* <button onClick={requestOccupations}>Request Occupations</button>
            <button onClick={requestStates}>Request States</button> */}

            {/* <form className="form" onSubmit="">
                <label for="fullname">Full Name:</label>
                <input></input>

                <label for="email">Email Address:</label>
                <input></input>

                <label for="password">Password:</label>
                <input></input>

                <label for="occupation">Occupation:</label>
                <input></input>

                <label for="state">State:</label>
                <input></input>

                <button>Submit</button>
            </form> */}
        </section>
    )
}

export default Form;