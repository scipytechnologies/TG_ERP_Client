import { configureStore } from '@reduxjs/toolkit'
import loginedUser from './loginedUser'
import company from './company'
import index from './index'
import crmAnaltics from './crm'

export default configureStore({
   reducer: {
      crmAnaltics : crmAnaltics,
      loginedUser : loginedUser,
      company : company,
      index:index
   }
})