import { configureStore } from '@reduxjs/toolkit'
import loginedUser from './loginedUser'

export default configureStore({
   reducer: {
      loginedUser : loginedUser
   }
})