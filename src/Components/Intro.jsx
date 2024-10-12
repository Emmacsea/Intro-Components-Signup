import { useState } from "react";
import err from "../assets/images/icon-error.svg";
import PropTypes from 'prop-types';


export const SignUp = ({
    firstname,
    lastname,
    emailaddress,
    password,
    onChangeFirstname,
    onChangeLastname,
    onChangeEmailaddress,
    onChangePassword,
    onSubmitDetails,

}) => {
    const [error, setError] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return  emailRegex.test(email)


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newError = {};


        if(!firstname) newError.firstname = (`First Name cannot be empty`);
        if(!lastname) newError.lastname = (`Last Name cannot be empty`);
        if(!validateEmail(emailaddress)) newError.emailaddress = (`Looks like this is not an email`);
        if(!emailaddress) newError.emailaddress = (`Email address cannot be empty`);
        if(!password) newError.password = (`Password cannot be empty`)

        setError(newError);
        if(Object.keys(newError).length === 0){
            onSubmitDetails();
        }


    }


  return (
    <div className="flex justify-center items-center bg-primary-red h-screen w-full bg-cover bg-center px-48">
      <div className="flex justify-center space-x-20 items-center">
        <div>
          <h2 className="text-white text-5xl font-bold ">
            Learn to code by watching others
          </h2>

          <p className="text-white text-base font-light mt-7">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers thinks
            is invaluale.
          </p>
        </div>

        <div className="w-full">
          <h2 className="bg-accent-blue rounded-lg py-2 px-5 w-full text-center font-semibold shadow-neutral-darkblue text-lg text-white">
            Try it free 7 days{" "}
            <span className="text-neutral-grayishblue">
              {" "}
              then $20/mo. therafter
            </span>
          </h2>

          <div className="w-full flex flex-col bg-white rounded-lg py-8 px-5 mt-6 ">
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col">
                      <div className={`flex inp  
                      ${error.firstname ? "border-primary-red" : "border-neutral-darkblue"}`}>
                        <input type="text"
                    className={`in `}
                    value={firstname} onChange={onChangeFirstname} placeholder="First Name" />
                    {error.firstname && (<img className="w-6" src={err} alt="" />)}                    
                      </div>
                    {error.firstname && (
                      <p className="err pl-60">{error.firstname}</p>
                    )}
                    </div>

                    <div className="flex flex-col">
                      <div className={`flex inp  
                      ${error.lastname ? "border-primary-red" : "border-neutral-darkblue"}`}>
                        <input type="text"
                    className={`in `}
                    value={lastname} onChange={onChangeLastname} placeholder="Last Name" />
                    {error.lastname && (<img className="w-6" src={err} alt="error img" />)}                    
                      </div>
                    {error.lastname && (
                      <p className="err pl-60">{error.lastname}</p>
                    )}
                    </div>

                    <div className="flex flex-col">
                      <div className={`flex inp  
                      ${error.emailaddress ? "border-primary-red" : "border-neutral-darkblue"}`}>
                        <input type="text"
                    className={`in `}
                    value={emailaddress} onChange={onChangeEmailaddress} placeholder="Email Address" />
                    {error.emailaddress && (<img className="w-6" src={err} alt="error img" />)}                    
                      </div>
                    {error.emailaddress && (
                      <p className="err pl-56">{error.emailaddress}</p>
                    )}
                    </div>

                    <div className="flex flex-col">
                      <div className={`flex inp  
                      ${error.password ? "border-primary-red" : "border-neutral-darkblue"}`}>
                        <input type="password"
                    className={`in `}
                    value={password} onChange={onChangePassword} placeholder="Password" />
                    {error.password && (<img className="w-6" src={err} alt="error img" />)}                    
                      </div>
                    {error.password && (
                      <p className="err pl-64">{error.password}</p>
                    )}
                    </div>

                   
                </div>

                <button className={`btn`}>
                    Claim your free trial
                </button>

                <div className="mt-3">
                    <p className="text-neutral-grayishblue text-xs text-center font-medium ">
                        By clicking the button, you are agreeing to our 
                        <span className="text-primary-red"> Terms and Services</span>
                    </p>
                </div>

            </form>
          </div>


        </div>
      </div>
    </div>
  );
};
SignUp.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    emailaddress: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChangeFirstname: PropTypes.func.isRequired,
    onChangeLastname: PropTypes.func.isRequired,
    onChangeEmailaddress: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSubmitDetails: PropTypes.func.isRequired,
}