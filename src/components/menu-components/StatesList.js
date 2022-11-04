import StateItems from './StateItems';

function StatesList({statesList, setState, setIsStatesListVisible}) {
    return (
        <div className="states-list-container">
            {statesList.map((e) => {
                return <StateItems 
                    stateItems={e} 
                    setState={setState}
                    setIsStatesListVisible={setIsStatesListVisible}
                />
            })}
            <button 
                type="button" 
                className="close-states-list-btn" 
                onClick={() => {setIsStatesListVisible(false)}}>
                    x
            </button>
        </div>
    )
}

export default StatesList;