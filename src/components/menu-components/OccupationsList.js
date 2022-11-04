import OccupationItems from './OccupationItems';

function OccupationsList({occupationsList, setOccupation, setIsOccsListVisible}) {
    return (
        <div className="occupations-list-container">
            {occupationsList.map((e) => {
                return <OccupationItems occupationItems={e} setOccupation={setOccupation}/>
            })}
            <button type="button" className="close-occ-list-btn" onClick={() => {setIsOccsListVisible(false)}}>x</button>
        </div>
    )
}

export default OccupationsList;