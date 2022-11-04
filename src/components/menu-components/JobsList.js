import JobItems from './JobItems';

function JobsList({jobsList, setJob, setIsJobsListVisible}) {
    return (
        <div className="jobs-list-container">
            {jobsList.map((e) => {
                return <JobItems jobItems={e} setJob={setJob}/>
            })}
            <button type="button" className="close-jobs-list-btn" onClick={() => {setIsJobsListVisible(false)}}>x</button>
        </div>
    )
}

export default JobsList;