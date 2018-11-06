import * as Status from '../definition/status';

export const login = () =>{
  return{
      type: Status.LOGIN,
  };
};

export const logout = () =>{
    return{
        type: Status.LOGOUT,
    };
};