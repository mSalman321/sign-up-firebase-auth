import React, { useRef, useState} from "react";
import { useAuth} from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup,currentUser} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


   async function handleSubmit(e) {
    e.preventDefault();
    console.log(passwordConfirmRef.current.value,passwordRef.current.value)


    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }
    
    try{
        console.log('inside try')
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);

    }

    catch{
        setError('Failed to create an account')
    }
    setLoading(false)


}

  return (
    <>
      <div className="card p-5">
        <div className="card-body mt-5">
          <h2 className="text-center mb-4">Sign up</h2>
       
         {
           currentUser.email
         }

          {error && <div className="alert alert-primary" role="alert">
              <strong>Warning! {error}</strong> 
          </div>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              ref={emailRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              ref={passwordRef}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password confirmation">Password confirmation</label>
            <input
              type="password"
              id="password-confirm"
              className="form-control"
              ref={passwordConfirmRef}
              required
            />
          </div>

          <div>
            <button disabled={loading} className="w-100 btn btn-primary" type="submit">
              Sign up
            </button>
          </div>
        </form>

        <div className="w-100 text-center mt-2">
          Already have an account ? Log in
        </div>
      </div>
    </>
  );
}
