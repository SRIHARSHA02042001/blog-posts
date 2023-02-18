import { useContext} from "react"
import UserContext from "./UserContext"
import { useNavigate} from "react-router-dom";
import '../styles/login.css';
function Login() {
  const {userId,setUserId,userPassword,setUserPassword,isLoggedIn,setIsLoggedIn}=useContext(UserContext);
  const navigate=useNavigate();
  const  isPasswordValid=()=> {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@_$])[A-Za-z\d@_$]{6,25}$/;
    return regex.test(userPassword);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("in submit");
    if(isPasswordValid){
        console.log('in if')
        setIsLoggedIn(true);
        console.log(isLoggedIn,userId,userPassword);
        navigate('/home',{replace:true});
    }
    else{
        alert("password must contain letters,nubers and @ or $ or _");
        setIsLoggedIn(false);
    }
  };
  return (
    <div className="form-container">
        <h2>Welcome to DataBeat</h2>
        <form className="form" onSubmit={handleSubmit}>
            <label>User ID:</label>
            <input type="email" value={userId} required onChange={(e)=>setUserId(e.target.value)} placeholder="Enter email id"/>
            <label>Password:</label>
            <input type="password" required value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} placeholder="Allowed char Aa-Zz,0-9,@,$,_" minLength={6} maxLength={25}/>
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}

export default Login