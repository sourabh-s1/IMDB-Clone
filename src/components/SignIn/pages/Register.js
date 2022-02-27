import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { registerInitiate } from '../redux/actions';
import "./Register.css";
import { BsInfo} from "react-icons/bs";

const Register=()=>{

  const [state, setState] = useState({
    displayName: '',
    email:'',
    password:'',
    passwordConfirm: '' ,
   });

const {currentUser} = useSelector((state) => state.user);

const history = useNavigate();

useEffect(()=>{
  if(currentUser){
    history.push('/');
  }
},[currentUser, history]);


   const dispatch = useDispatch();

  const{email, password, displayName, passwordConfirm} = state;

  const handleSubmit =(e) =>{
    e.preventDefault();
    if(password !== passwordConfirm){
      return alert("Passwords don't match.");
    }
    dispatch (registerInitiate(email, password, displayName));
    setState({email:"", displayName: "", password: "", passwordConfirm: ""})
    alert ("You have successfully registered.");
    };
  const handleChange =(e) =>{
    let {name, value} = e.target;
    setState({...state, [name]: value});
  };
  return (
    <div>

       <div className="logo">
        <img  width="5%"src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt=""/>
      </div>

        <div id= "register-form">
          <form className="form-signup" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{fontWeight:"700", textAlign:"left"}}>
            Create Account
              </h1>

              <input
              type="text"
              id="displayName"
              className="form-control"
              placeholder="Name"
              name="displayName"
              onChange={handleChange}
              value={displayName}
              required
              />

              <input
              style={{marginTop:"12px"}}
              type="email"
              id="userEmail"
              className="form-control"
              placeholder="Your Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
              />

            <input
            style={{marginTop:"12px"}}
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Create a password"
              name="password"
              onChange={handleChange}
              value={password}
              required
              />

              <div  className="para">
               <p><BsInfo color="Blue" size="20"/> Passwords must be at least 8 characters.</p>
              </div>


              <input
              style={{marginTop:"17px"}}
              type="password"
              id="passwordConfirm"
              className="form-control"
              placeholder="Confirm Password"
              name="passwordConfirm"
              onChange={handleChange}
              value={passwordConfirm}
              required
              />
              <div className="c-btn">
              <button style={{marginTop:"12px"}} className="btn btn-primary btn-block" type="submit">
                Create Your IMDb Account
              </button>
              </div>
              <div className="al">
                <p>Already have an account?</p>
              </div>
            <Link to="/login">
              <div className="s-btn">
                <button className="btn btn-primary btn-block">Sign-In Now</button>
              </div>

              </Link>
          </form>
          <br/>

        </div>

        <div className="hr">

        </div>

        <div>
          <div className="foot">
               <div>
                 <a  href="https://help.imdb.com/article/imdb/general-information/why-should-i-register-on-imdb/GHB62T7USTMYMCDC?ref_=cons_ap_ftr_help#">Help</a>
               </div>
               <div>
                 <a href="https://www.imdb.com/conditions">Conditions of Use</a>
               </div>
               <div>
                 <a href="https://www.imdb.com/privacy">Privacy Policy</a>
               </div>
          </div>

          <div className="foot" >
            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>



        </div>

    </div>
  )
}

export default Register;