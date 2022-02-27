import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { googleSignInInitiate, loginInitiate } from '../redux/actions';
import "./Login.css";
const Login=()=>{
  const [state, setState] = useState({
    email:'',
    password:'',
  });

const{email, password} = state;

const {currentUser} = useSelector((state) => state.user);

const history = useNavigate();

useEffect(()=>{
  if(currentUser){
    history.push('/');
    
  }
},[currentUser, history]);

const dispatch = useDispatch();

const handleGoogleSignIn = () => {
  dispatch(googleSignInInitiate());
};
const handleFBSignIn = () => {};

  const handleSubmit =(e) =>{
    e.preventDefault();
    // if(!email || !password){
    //   return alert("Please fill in all fields");
    // }
    if(e.email !== email || e.password !== password) {
    // alert("Please enter correct email or Password.");

    }
   dispatch(loginInitiate(email, password));
    setState({email:"", password:""});
    alert ("You have successfully logged in");

  };

  const handleChange =(e) =>{
    let {name, value} = e.target;
    setState({...state, [name]: value });
  };
  return (
    <div style={{backgroundColor:"#ccc"}}>
      <div className="main">


        <div id= "logreg-forms">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
              Sign In
              </h1>
              <div className="social-login">
                <button
                id="google-btn"
                className="btn google-btn social-btn"
                type="button"
                onClick={handleGoogleSignIn}>

                  <span>
                    <i className="fab fa-google-plus-g"></i> Sign in with Google+
                  </span>
                  </button>

                  <button
                  id="fb-btn"
                className="btn facebook-btn social-btn"
                type="button"
                onClick={handleFBSignIn}>

                  <span>
                    <i className="fab fa-facebook-f"></i> Sign in with Facebook
                  </span>
                  </button>
              </div>
              <p style={{textAlign:"center"}}>OR</p>
              <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email Address"
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
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
              />
              <div className="si-btn">
                <Link to="/">
               <button className="btn btn-secondary btn-block" type="submit">
                Sign In
               </button>
               </Link>
              </div>

               <hr></hr>

              <p>Don't have an account?</p>
              <Link to="/register">
              <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
              >
               Create a New Account
              </button>
                </Link>

                <div className="foot" style={{display: "inline"}}>
              <p>By signing in, you agree to IMDb's <a  href="https://www.imdb.com/conditions">Conditions of Use</a> and <a href="https://www.imdb.com/privacy">Privacy Policy</a>.</p>
             </div>

          </form>


        </div>

        <div className="right">

           <h3 style={{textAlign:"left"}} >Benefits of your free IMDb account</h3>
           <h5 style={{textAlign:"left"}}>Personalized Recommendations</h5>
           <p style={{textAlign:"left"}}>Discover shows you'll love.</p>
           <br/>

           <h5 style={{textAlign:"left"}}>Your Watchlist</h5>
           <p style={{textAlign:"left"}}>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
           <br/>

           <h5 style={{textAlign:"left"}}>Your Ratings</h5>
           <p style={{textAlign:"left"}}>Rate and remember everything you've seen.</p>
           <br/>

           <h5 style={{textAlign:"left"}}>Contribute to IMDb</h5>
           <p style={{textAlign:"left"}}>Add data that will be seen by millions of people and get cool badges.</p>


        </div>

        </div>
    </div>
  )
}

export default Login;