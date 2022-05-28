import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import auth from '../Components/Firebase/firebase.init'
import Loading from '../Components/Loading/Loading';
const useUser = () => {
    const [user] = useAuthState(auth);
    const [currentUser, setcurrentUser] = useState({role : "am-public"})
    const { isLoading } = useQuery(['current-user', user], () => {
        if (user) {
            fetch(`https://code-house-server.vercel.app/users/${user.email}`,{
                method: 'get',
                headers :{
                    auth : localStorage.getItem('accessToken')
                }
            }).then(res => res.json()
            ).then(data => setcurrentUser(data))
        }
    }
    )
    if (isLoading) {
        return <Loading />
    }
    return currentUser
}

export default useUser