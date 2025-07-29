
import { useState } from "react";

const Loginform=()=>{
    const [email, setEmail]= useState("nic.veggian@gmail.com")
    const [password, setPassword]= useState("")
    return (<div>
        <form>
            <div>
                <label>Email</label>
                <input type="email" required value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type= "password" required value ={password} onChange={(e)=> setPassword(e.target.value)}></input>
            </div>
            <button className= "btn btn-success"> Login </button>

        </form>
        {email}{password}
    </div>)
};

export default Loginform;