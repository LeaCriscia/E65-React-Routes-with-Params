import {useState} from "react";

const Register = () => {
  //initial state using state hooks
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //create callback on change function with e
  const changeFullname = (e)=>{
    // console.log(e.target.value);
    setFullname(e.target.value);
  };
  const changeEmail = (e)=>{
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e)=>{
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  //submit handler
  const submitHandler =(e)=>{
    //prevent refreshing of page
    e.preventDefault();
    console.log({fullname, email, password});
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input 
          onChange={changeFullname}
          className="form-control" 
          type="text" 
          placeholder="Fullname"
          value={fullname} 
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeEmail}
            className="form-control"
            type="email"
            placeholder="account@company.com"
            value={email}
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changePassword}
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="text">Register Now!</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
