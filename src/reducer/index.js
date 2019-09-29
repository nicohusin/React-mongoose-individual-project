import {combineReducers} from 'redux'
import SignUp from './register'
import LoginUser from './login'
import getUserName from './getUserName'

const allReducers = combineReducers({
  SignUp,
  LoginUser,
  getUserName
});

export default allReducers