import React, { useState } from 'react'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import Loading from '../Loading/Loading';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Social = () => {
  const navigate = useNavigate()
  const [loading ,setLoading] = useState(false)


  const signIn = async () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      fetch(`https://code-house420.herokuapp.com/user/${user.email}`, {
        method: "put",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ displayName: user.displayName, email: user.email, photoURL: user.photoURL })
      })
        .then(res => res.json())
        .then(json => {
          localStorage.setItem('accessToken', json.accessToken)
          navigate('/')
          setLoading(false)
        })

    }).catch((error) => {
      setLoading(false)
    });
    
     
   
    
  }


  if (loading) {
    return <Loading />
  }
  return (
    <div className='mx-7'>
      <div className="divider mt-5">OR</div>
      <button
        onClick={signIn}
        className="btn bg-neutral w-full my-5">Google</button>
    </div>
  )
}

export default Social