import React, { useState } from 'react';
import OccupationsList from './menu-components/OccupationsList';
import StatesList from './menu-components/StatesList';

function Form() {
    // useState for form object
    const [name, setName] = useState('');
    console.log('form name', name)
    const [email, setEmail] = useState('');
    console.log('form email', email)
    const [password, setPassword] = useState('');
    console.log('form password', password)
    const [occupation, setOccupation] = useState('');
    console.log('form job', occupation)
    const [state, setState] = useState('');
    console.log('form state', state)

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
                <h2>This is the form</h2>
                <label for="fullname">Full Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>

                <label for="email">Email Address:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>

                <label for="password">Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>

                <label for="occupation">Occupation:</label>
                <button type="button" onClick={() => {
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

                <label for="state">State:</label>
                <button type="button" onClick={() => {
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

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Form;