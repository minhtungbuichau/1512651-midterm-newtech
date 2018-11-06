import * as Types from '../definition/status';

export const login = () =>{
  return{
      type: Types.LOGIN_CHAT_APP,
  };
};

export const logout = () =>{
    return{
        type: Types.LOG_OUT_CHAT_APP,
    };
};