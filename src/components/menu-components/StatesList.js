import StateItems from './StateItems';

function StatesList({statesList, setState, setIsStatesListVisible}) {
    console.log('state items', statesList)
    return (
        <div className="states-list-container">
            <h1>This is the states list</h1>
            {statesList.map((e) => {
                return <StateItems stateItems={e} setState={setState}/>
            })}
            <button type="button" className="close-states-list-btn" onClick={() => setIsStatesListVisible(false)}>x</button>
        </div>
    )
}

export default StatesList;