function OccupationItems({occupationItems, setOccupation, setIsOccsListVisible}) {
    return (
        <div className="occupation-items" onClick={(e) => {
            setOccupation(e.target.textContent)
            setIsOccsListVisible(false)
        }}>
            {occupationItems}
        </div>
    )
}

export default OccupationItems;