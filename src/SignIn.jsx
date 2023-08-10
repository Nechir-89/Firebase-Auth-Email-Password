import { useState } from 'react'
import './App.css'
import { 
  getAuth, 
  signInWithEmailAndPassword,
 } from "firebase/auth";
import { redirect } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        redirect('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.error(errorCode)
        const errorMessage = error.message;
        console.error(errorMessage);
        // ..
      });
  }
  return (
    <>
      <form className='container' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="password"
          placeholder='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit" >Sign In</button>
      </form>
    </>
  )
}

export default SignIn
