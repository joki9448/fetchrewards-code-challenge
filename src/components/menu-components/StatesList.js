import StateItems from './StateItems';

function StatesList({states}) {
    console.log('state items', states)
    return (
        <div>
            <h1>This is the states list</h1>
            {states.map((e) => {
                return <StateItems stateItems={e}/>
            })}
        </div>
    )
}

export default StatesList;