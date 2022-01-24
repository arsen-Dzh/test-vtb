import { AUTH } from '../actions/userAction';

interface IUserState {
  auth: boolean
}

interface IUserAction {
  type: string,
  payload?: any
}

const initalState: IUserState = {
  auth: false
} 


export const userReducer = (state = initalState, action: IUserAction): IUserState => {
  switch(action.type) {
    case AUTH: 
      return {...state, auth: !state.auth}
    default:
    return state
  }
}