import { useState } from 'react';
import { deletefunction } from '../data/firdate';
export const Removefir=()=>{
    const [firId,setFirId]=useState("");
    const handleRemove=()=>{
        // Logic to remove FIR based on the entered FIR ID
        deletefunction(firId);
        
        alert("FIR removed successfully!");
    }
    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",marginTop:"50px"}}>
            <input style={{padding:"10px",fontSize:"16px"}} type="text" value={firId} onChange={(e)=>setFirId(e.target.value)} placeholder="Enter FIR ID to remove"></input>
            <button style={{padding:"10px 20px",fontSize:"16px"}} onClick={handleRemove}>Remove FIR</button>
        </div>
    )
}