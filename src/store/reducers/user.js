const initialState = { 
    usuario: "",
};

const userSlice = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { ...state, ...action.payload }; 
    case "logout":
      return initialState;
    default:
      return state; 
  }
};

export default userSlice;
