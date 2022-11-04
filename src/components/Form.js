import React, { useState } from 'react';
import OccupationsList from './OccupationsList';

function Form () {
    // useState for form object
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [job, setJob] = useState('');
    const [state, setState] = useState('');

    // useState for dropdown menus
    const [occupations, setOccupations] = useState([]);
    const [states, setStates] = useState([]);
     
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
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                job: job,
                state: state
            })
        });
    }

    return (
        <section className="form-section">
            <h1>This is the form</h1>

            <form className="form" onSubmit={handleSubmit}>
                <label for="fullname">Full Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>

                <label for="email" onChange={(e) => setEmail(e.target.value)} value={email}>Email Address:</label>
                <input type="email"></input>

                <label for="password" onChange={(e) => setPassword(e.target.value)} value={password}>Password:</label>
                <input type="password"></input>

                <label for="occupation">Occupation:</label>
                <button type="button" onClick={requestOccupations}>Request Occupations</button>

                <label for="state">State:</label>
                <button type="button" onClick={requestStates}>Request States</button>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Form;