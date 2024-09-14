import React, { useEffect } from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import Loginpage from './components/login/Loginpage'
import Notification from './components/notification/Notification'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase';
import { useUserStore } from './userStore'
import { useChatStore } from './chatStore'

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const {chatId} = useChatStore();

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid);
    })

    return () => {
      unSub();
    }
  },[fetchUserInfo])

  if(isLoading) return <div className='loading'>Loading..</div>
  return (
    <div className='container'>
      {
        currentUser ? (
          <>
          <List/>
          {chatId && <Chat/>}
          {chatId && <Detail/>}
          </>
        ) : (<Loginpage/>)
      }
      <Notification/>
      
    </div>
  )
}

export default App
