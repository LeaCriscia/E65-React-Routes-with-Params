import {useState} from "react";
import { Container } from "react-bootstrap";

const Register = () => {
  //initial state using state hooks
    const [formData, setFormdata] = useState({
        fullname: '',
        email: '',
        password:''
    });
  //create callback on change function with e
  const changeFormdata = (e)=>{
    setFormdata({
        ...formData,
        [e.target.name] : e.target.value
    });
    console.log(formData);

  };
  //submit handler
  const submitHandler =(e)=>{
    //prevent refreshing of page
    e.preventDefault();
    console.log({formData});
  };
  return (
    <Container style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <input 
          onChange={changeFormdata}
          className="form-control" 
          type="text" 
          placeholder="Fullname"
          value={formData.fullname} 
          name="fullname"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeFormdata}
            className="form-control"
            type="email"
            placeholder="account@company.com"
            value={formData.email}
            name="email"
          />
        </div>
        <div className="mb-3">
          <input
            onChange={changeFormdata}
            className="form-control"
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="text">Register Now!</button>
        </div>
      </form>
    </Container>
  );
};

export default Register;
