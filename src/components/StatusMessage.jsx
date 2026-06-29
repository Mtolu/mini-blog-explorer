function StatusMessage({loading, error, retry, children}){

    if(loading){
        return <h2 className="loading-status">Loading posts...</h2>
    }
    if(error){
        return (
        <div>
            <h2 className="error-status">{error} <button onClick={retry} className="btn-retry-error">
                                Click here
            </button></h2>         
        </div>
        ) 
                    
      }

    return(
      children
    );
}

export default StatusMessage