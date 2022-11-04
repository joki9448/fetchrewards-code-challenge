function JobItems({jobItems, setJob}) {
    return (
        <div className="job-items" onClick={(e) => setJob(e.target.textContent)}>
            {jobItems}
        </div>
    )
}

export default JobItems;