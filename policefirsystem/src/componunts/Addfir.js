import { useParams } from "react-router-dom";
import {firdata} from "./Fir";

const Addfir = () => {
  const { username, userid } = useParams();

  return (
    <div>
      <h1>Welcome {username}</h1>
      <div>

      </div>
    </div>
  );
};

export default Addfir;