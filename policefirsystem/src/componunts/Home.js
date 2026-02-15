import {Homecard1,Hometext}from "./styledcomponents";
import policelogo from "../image/policelogo.jpeg";
import Contact from "./Contact";
const Home=()=>{
    return <div><Homecard1>
        <div>
            <img src={policelogo} alt="logo" className="homelogoimage"/> 
        </div>
        <Hometext>
            <h1>TAMILNADU POLICE SERVICE</h1>
            <p>CALL 100 FOR EMERGENCY ,WE ARE HERE TO HELP YOU,WE ARE COMMITTED TO PROTECT AND SERVE THE CITIZENS OF TAMILNADU</p>
            <hr/>
            
        </Hometext>
        
    </Homecard1>  
    <div><hr/></div>
    <div>
        <Contact/>
    </div>
    </div>
}
export default Home;