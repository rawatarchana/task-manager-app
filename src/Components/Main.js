const Main = ({tasks, value, username, placeholder, addValue, addTask, addUser, handleCompleteTask, handleDeteteTask}) => {
    return(
        <main>
            <div className="container-xxl">
                <div className="row justify-content-center mt-3 mb-4">
                    <div className="input-group flex-nowrap">
                        <input className="form-control" placeholder={username.length > 11 ? "Enter your name again":placeholder} value={value} onChange={addValue}/>
                        <button className="btn btn-outline-primary" onClick={username === "" ? addUser : username.length > 11 ? addUser : addTask}>
                            <i className={username === "" ? "bi bi-check-lg" : username.length > 11 ? "bi bi-check-lg" : "bi bi-plus-lg"}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-sm">
                <div className="row justify-content-center my-3">
                    {
                        tasks.map((item, index) => 
                            item.completed !== true ?
                                <div key={index} className="input-group flex-nowrap my-1">
                                    <div className="form-control">{item.task}</div>
                                    <button className="btn btn-outline-warning" onClick={()=>handleCompleteTask(item.id)}>
                                        <i className="bi bi-check-lg"/>
                                    </button>
                                    <button className="btn btn-outline-danger" onClick={()=>handleDeteteTask(item.id)}>
                                        <i className="bi bi-trash"/>
                                    </button>
                                </div>
                            : null
                        )
                    }
                </div>
            </div>

            {
                username !== '' && username.length < 11 ? 
                    <div className="container-sm">
                        <div className="row justify-content-center my-3">
                            <h3 className="text-center">Completed Tasks</h3>
                            {
                                tasks.map((item, index) => 
                                    item.completed === true ?
                                        <div key={index} className="input-group flex-nowrap my-1">
                                            <div className="form-control">{item.task}</div>
                                            <button className="btn btn-outline-danger" onClick={()=>handleDeteteTask(item.id)}>
                                                <i className="bi bi-trash"/>
                                            </button>
                                        </div>
                                    : null
                                )
                            }
                            {
                                tasks.filter((item) => item.completed === true).length === 0 ? 
                                <p className="text-center text-warning">Completed tasks will show here.</p>
                                : null
                            }
                        </div>
                    </div>
                : null
            }
            
        </main>
    )
}

export default Main;