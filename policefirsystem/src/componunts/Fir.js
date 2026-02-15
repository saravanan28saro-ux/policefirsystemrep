import {Fircard} from "./styledcomponents";
import { useState } from "react";
import Listoffir from "./Listoffir";
const Fir =()=>{
    const firdata=[
    {
        firno:"1234",
        name:"Saravanan",
        date:"2023-01-01",
        time:"10:00",
        place:"Chennai",
        description:"Theft of a car",
        status:"Open"
    },
    {
        firno:"5678",
        name:"Kumar",
        date:"2023-02-01", 
        time:"15:00",
        place:"Coimbatore",
        description:"Assault and battery",
        status:"Closed"
    },
    {
        firno:"9012",
        name:"Priya",
        date:"2023-03-01",
        time:"12:00",
        place:"Madurai",
        description:"Fraud",
        status:"Open"   
    }

    ]
    
    const [firno,setFirno]=useState("");
    const [filteredFir,setFilteredFir]=useState([]);
        const ChannelMergerNode=(event)=>{
            setFirno(event.target.value);

        }
    const search=()=>{
        const filteredFir = firdata.filter(fir => fir.firno === firno);
        setFilteredFir(filteredFir);
        if (firno === ""){
            setFilteredFir(firdata);
        }
    }
    return(
        <div>
            <Fircard>
            <h1>Enter FIR Number</h1>
            <input className="firnoinput" type="text" value={firno} onChange={ChannelMergerNode} placeholder="FIR Number"/>
            <button className="searchbutton" onClick={search}>Search</button>
        </Fircard>
        <hr/>
        <Listoffir data={filteredFir}/>
        </div>
    )
}
export default Fir;