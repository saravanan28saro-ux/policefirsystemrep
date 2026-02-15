import {HeaderContainer,Headerlist,HeaderButton}from "./styledcomponents";
import {Link} from "react-router-dom";
import "./index.css"
const Header=()=>{
return(
    <HeaderContainer className="header">
        <div><img src="" alt="logo"/></div>
        
            <Headerlist >
                <Link className="headerlink" to="/">Home</Link>
                <Link className="headerlink" to="/fir">FIR</Link>
                <Link className="headerlink" to="/support">Support</Link>
                <Link className="headerlink" to="/contact">Contact</Link>
                
            </Headerlist>
      
        <div>
            <HeaderButton>
                login
            </HeaderButton>
        </div>

    </HeaderContainer>
)
}
export default Header;

