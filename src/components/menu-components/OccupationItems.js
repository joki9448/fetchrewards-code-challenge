function OccupationItems({occupationItems, setOccupation}) {
    return (
        <div className="occupation-items" onClick={(e) => setOccupation(e.target.textContent)}>
            {occupationItems}
        </div>
    )
}

export default OccupationItems;