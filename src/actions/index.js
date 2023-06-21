// actionTypes.js
export const SET_TOKEN = 'SET_TOKEN';

export const SET_USER='SET_USER'

// actions.js
export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const setUser=(data)=>{
    return {
        type:SET_USER,
        payload:data
    }
}