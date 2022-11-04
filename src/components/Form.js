import React, { useState } from 'react';
import OccupationsList from './menu-components/OccupationsList';
import StatesList from './menu-components/StatesList';

function Form() {
    // useState for form object
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOccupation] = useState('');
    const [state, setState] = useState('');

    // useState for dropdown menus
    const [occupationsList, setOccupationsList] = useState([]);
    const [statesList, setStatesList] = useState([]);
    const [isOccsListVisible, setIsOccsListVisible] = useState(false);
    const [isStatesListVisible, setIsStatesListVisible] = useState(false);
     
    // Occupations and States GET requests
    const requestOccupations = async () => {
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form');
        let res = await req.json();
        setOccupationsList(res.occupations)
    }
    const requestStates = async () => {
        let req = await fetch('https://frontend-take-home.fetchrewards.com/form');
        let res = await req.json();
        setStatesList(res.states);
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
                occupation: occupation,
                state: state
            })
        });
        if (req.status === 201) {
            alert('Submission successful!')
        } else 
            alert('Submission failed!')
    }

    return (
        <section className="form-section">
            <form className="form" onSubmit={handleSubmit}>
                <h2>Tell Us About Yourself!</h2>
                <label for="fullname">Full Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>

                <label for="email">Email Address:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>

                <label for="password">Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

                <label for="occupation">Occupation: {occupation}</label>
                <button type="button" className="menu-btn" onClick={() => {
                    requestOccupations()
                    setIsOccsListVisible(true)
                }}>
                    Select Occupation
                </button>
                {isOccsListVisible ? <OccupationsList 
                    occupationsList={occupationsList} 
                    setOccupation={setOccupation} 
                    setIsOccsListVisible={setIsOccsListVisible}/> 
                : null}

                <label for="state">State: {state}</label>
                <button type="button" className="menu-btn" onClick={() => {
                    requestStates()
                    setIsStatesListVisible(true);
                }}>
                    Select State
                </button>
                {isStatesListVisible ? <StatesList 
                    statesList={statesList} 
                    setState={setState} 
                    setIsStatesListVisible={setIsStatesListVisible}/> 
                : null}

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    )
}

export default Form;