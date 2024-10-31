
const initialState = {
  userList: [],
  
};
export const addUserAction = (name) => ({
  type: "addUser",
  name,
});
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addUser":
      return {
        ...state,
        userList: [...state.userList, action.name],
      };
    default:
      return state;  
  }
};
