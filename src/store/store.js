import { configureStore } from '@reduxjs/toolkit'
import loginedUser from './loginedUser'
import company from './company'
import index from './index'

export default configureStore({
   reducer: {
      loginedUser : loginedUser,
      company : company,
      index:index
   }
})