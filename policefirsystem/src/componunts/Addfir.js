import { useParams } from "react-router-dom";
import { useState } from "react";
import {addfunction} from "../data/firdate";
import { Addform,Logininput,LoginButton} from "./styledcomponents";

const Addfir = () => {
  const [newfirdata,setnewfirdata]=useState({firno:"",name:"",place:"",description:"",status:"" ,date:"",time:""});
  
  const { username} = useParams();
  const Submit = (event) => {  
    event.preventDefault();
    
    addfunction(newfirdata);
    
    alert("FIR submitted successfully");
    setnewfirdata({firno:"",name:"",place:"",description:"",status:"" ,date:"",time:"" });
    console.log("FIR submitted successfully");
  }
  
  return (
    <div>
      <h1>Welcome {username}</h1>
      <div>
        <Addform onSubmit={Submit}>
          <Logininput type="text" placeholder="Fir No" value={newfirdata.firno} onChange={(e) => setnewfirdata({...newfirdata, firno: e.target.value})} />
          <Logininput type="text" placeholder="Name" value={newfirdata.name} onChange={(e) => setnewfirdata({...newfirdata, name: e.target.value})} />
          <Logininput type="text" placeholder="Place" value={newfirdata.place} onChange={(e) => setnewfirdata({...newfirdata, place: e.target.value})} />
          <Logininput type="text" placeholder="Description" value={newfirdata.description} onChange={(e) => setnewfirdata({...newfirdata, description: e.target.value})} />
          <Logininput type="text" placeholder="Status" value={newfirdata.status} onChange={(e) => setnewfirdata({...newfirdata, status: e.target.value,date:"12-01-2023"})} />
          <LoginButton type="submit" onClick={(e) => setnewfirdata({...newfirdata,date:new Date().toISOString().split('T')[0],time:new Date().toLocaleTimeString()})}>Submit FIR</LoginButton>
        </Addform>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Addfir;