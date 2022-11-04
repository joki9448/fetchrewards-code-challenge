import React from 'react';
import { useState } from 'react';

function Form () {
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);

    const requestOccupations = async () => {
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form');
        let res = await req.json();
        console.log('occupations: ', res.occupations);
    }
    const requestStates = async () => {
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form');
        let res = await req.json();
        console.log('states: ', res.states);
    }
    
    return (
        <section className="form-section">
            <h1>This is the form</h1>
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