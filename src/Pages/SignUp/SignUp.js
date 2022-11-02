import React from 'react';
import login from  '../../genius-car-resources-main/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const SignUp = () => {

    
    const {createUser} = useContext(AuthContext)


     

    const handleSignUp = (event) => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;

        const email = form.email.value;

        const password = form.password.value;

        // console.log(name,email,password);

        createUser(email, password)
        .then(result => {

            const user = result.user;
            console.log(user)

        })
        .catch(err => console.error(err));


   
      }

    return (
        <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content  md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
         
        <img src={login} alt="" srcset="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  name='name'  placeholder="Your Name " className="input input-bordered"  required/>
              </div>

          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text"  name='email' placeholder="email" className="input input-bordered"   required/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password'  placeholder="password" className="input input-bordered" />
                <label className="label">
                 
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign UP" />
            
              </div>
            </form>
             
             <p className='text-center mb-4'> Already Have a Account <Link className='text-orange-600 font-bold' to={"/login"}> Login </Link></p>
             
          </div>
        </div>
      </div>
    );
};

export default SignUp;