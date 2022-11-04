function StateItems({stateItems, setState, setIsStatesListVisible}) {
    return (
        <div className="state-items" onClick={(e) =>{
            setState(e.target.textContent)
            setIsStatesListVisible(false)
        }}>
            {stateItems.name} - {stateItems.abbreviation}
        </div>
    )
}

export default StateItems;