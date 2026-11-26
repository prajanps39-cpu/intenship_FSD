import { useState } from "react";

function Login(){
      const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const formSubmit=(e)=>e.preventDefault();

    console.log(email,password)
    return(
        /* <div className="text-blue-500">HI </div>

        <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>

        <form onSubmit={loginSubmit}>
            <label>UserName:</label>
            <input type ="text" required placeholder="Enter your usnername." value={username} onChange={(e)=>setUsername(e.target.value)}/>
             <br></br>
              <br></br>
             <label>Email:</label>
            <input type ="email" required placeholder="Enter your email id." value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br></br>
             <br></br>
            <label>Passcode:</label>
            <input type ="password" required placeholder="Enter your Password." value={password} onChange={(e)=>setPassword(e.target.value)}/>
               <br></br>
                <br></br>
            <button type = "submit">Login</button>
        </form>
    </div>

);
}
export default Login;