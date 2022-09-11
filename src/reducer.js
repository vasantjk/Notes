export const initialState = {
  text: "",
  dropdown: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, text: action.payload };
    case "DROPDOWN":
      return { ...state, dropdown: action.payload };
    default:
      return "";
  }
};
