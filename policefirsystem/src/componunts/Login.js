import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logincard, LoginButton, Logininput } from "./styledcomponents";

const policeusers = [
  { username: "saravanan", userid: "TN1234" },
  { username: "kumar", userid: "TN5678" },
  { username: "priya", userid: "TN9012" }
];

const Login = () => {
  const [username, setusername] = useState("");
  const [userid, setuserid] = useState("TN");
  const navigate = useNavigate();

  const buttoncall = () => {
    const user = policeusers.find(
      (user) => user.username === username && user.userid === userid
    );

    if (user) {
      // ✅ Navigate with multiple params
      navigate(`/addfir/${username}/${userid}`);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Logincard>
        <Logininput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <Logininput
          type="text"
          placeholder="Userid"
          value={userid}
          onChange={(e) => setuserid(e.target.value)}
        />
        <LoginButton onClick={buttoncall}>
          Login
        </LoginButton>
      </Logincard>
    </div>
  );
};

export default Login;