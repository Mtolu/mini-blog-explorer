const announces = [
    "DIGIHUB ACADEMY", 
    "★", 
    "React Assignment", 
    "★"
];

function Header() {
    const repeatedHeads = [...announces, ...announces, ...announces, ...announces, ...announces];
    
    return (
        <div className="header">
             <div className="marquee-container">
                <div className="marquee-track">
                    {repeatedHeads.map((announce, index)=>(
                        <span key={`${announce}-${index}`}>{announce}</span>
                    ))}
                </div>

                <div className="marquee-track">
                    {repeatedHeads.map((announce, index)=>(
                        <span key={`${announce}-${index}`}>{announce}</span>
                    ))}
                </div>
            </div> 
            <h1>Mini Blog Explorer</h1>
            <h2>React State + useEffect + Public API </h2>
            <h3>The Total Posts Counts: 100 </h3>
        </div>
    );
}

export default Header;
