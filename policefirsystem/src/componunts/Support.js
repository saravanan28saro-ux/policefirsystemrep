import { policeusers } from "../data/firdate";
import { Supportcard,Supportlist} from "./styledcomponents";
const Support = ()=>{
    return(
        <Supportcard>
            <h1>Support Page</h1>
            <p>For any support or inquiries, please contact us at </p>
            <Supportlist>
                {policeusers.map(user => (
                    <div key={user.userid}>
                        <p>{user.rank} {user.username} - {user.contact} - {user.posting}</p>    
                    </div>
                ))}
            </Supportlist>
        </Supportcard>)}
export default Support;