
export const Select=()=>{
    return(
        <div>
          <br/>
          <br/>
            <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
                <button style={{padding:"10px 20px",fontSize:"16px"}}><a style={{textDecoration:"none",color:"black"}} href={`/Addfir`}>ADD FIR </a></button>
                <button style={{padding:"10px 20px",fontSize:"16px"}}><a style={{textDecoration:"none",color:"black"}} href={`/Removefir`}>DELETE FIR</a></button>
            </div>
        </div>
    )
}