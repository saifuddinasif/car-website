import React, { useContext } from 'react';
import login from  '../../genius-car-resources-main/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {


  const {login} = useContext(AuthContext)

   const hadleLogin = (event) => {

     event.preventDefault();

     const form = event.target;

     const email = form.email.value;

     const password = form.password.value;

     login(email,password)

     .then(result => {

      const user = result.user;

       console.log(user)
     })

      .then(error => console.log(error))


   }

    return (
        <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content  md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
         
        <img src={login} alt="" srcset="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hadleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password"  name='password' className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="login" />
            
              </div>
            </form>
             
             <p className='text-center mb-4'>New Here <Link className='text-orange-600 font-bold' to={"/sign"}> Sign Up </Link></p>
             
          </div>
        </div>
      </div>
    );
};

export default Login;