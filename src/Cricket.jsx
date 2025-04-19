import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] = useState(0);
    const [singles,setSingles] = useState(0);
    const [fours,setFours] = useState(0);
    const [sixes,setSixes] = useState(0);

    /* handler for each button */
    const handleSingle=()=>{
        const updatedRuns = runs +1;
        const updatedSingles = singles +1;
        setSingles(updatedSingles);
        setRuns(updatedRuns);
    }

    const handleFour = ()=>{
        const updatedRuns = runs + 4;
        const updatedFours = fours +1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }
    const handleSix=()=>{
        const updatedRuns = runs +6;
        const updatedSixes = sixes +1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }

    return(
        <div>
            <h3>Bangladesh</h3>
            <h1>Runs : {runs}</h1>
            {
                runs > 50 && <p>Your scored : 50</p>
            }
            <p><small>Single : {singles}</small></p>
            <p><small>Fours : {fours}</small></p>
            <p><small>Sixes : {sixes}</small></p>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}