import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {

    //const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const[logindata,setLogindata] = useState({
        username:"",
        password:""
    })
    const location = useLocation()
    const registerdata = location.state

    function handleChange(e){
        e.preventDefault();
        setLogindata({
            ...logindata,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (logindata.username===registerdata.name && logindata.password===registerdata.password){
             console.log("login pagedata",logindata)
            console.log("register pagedata",registerdata)
            navigate('/dashboard',{state:logindata})
           
        }else{
            console.log("The credentials are wrong")

        }
    }

    return (
        <div>
            <h1>Login Page</h1><br></br>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username" name="username" onChange={handleChange}/>
                <br /><br />
                <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login