import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { redirect } from 'react-router-dom';

export default function SingOut() {
  const auth = getAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    signOut(auth).then(() => {
      console.log();
      redirect('/')
    }).catch(error => {
      console.error(error)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type='submit'>SingOut</button>
      </form>
    </div>
  )
}
