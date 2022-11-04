function StateItems({stateItems, setState}) {
    return (
        <div className="state-items" onClick={(e) => setState(e.target.textContent)}>
            {stateItems.name} - {stateItems.abbreviation}
        </div>
    )
}

export default StateItems;