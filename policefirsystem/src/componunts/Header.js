import {HeaderContainer,Headerlist,HeaderButton}from "./styledcomponents";
import {Link} from "react-router-dom";
import policelogo from "../image/policelogo.jpeg";
import "./index.css";

const Header=()=>{
    
return(
    <HeaderContainer className="header">
        <div>
            <img src={policelogo} alt="logo" className="logoimage"/>
        </div>
        
            <Headerlist >
                <Link className="headerlink" to="/">Home</Link>
                <Link className="headerlink" to="/fir">FIR</Link>
                <Link className="headerlink" to="/support">Support</Link>
                <Link className="headerlink" to="/contact">Contact</Link>
                
            </Headerlist>
      
        <div>
            <HeaderButton>
            <Link style={{color:"black",alignItems:"center"}} className="headerlink" to="/login">Login</Link>
            </HeaderButton>
        </div>

    </HeaderContainer>
)
}
export default Header;

