import  { createContext, useContext, useReducer } from "react";

const initialState = {
  subject: "",
  title: "",
  description: "",
  files: []
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_FILES":
      return { ...state, files: action.payload };
    default:
      return state;
  }
};

const GlobalReportStateContext = createContext();

export const GlobalReportStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalReportStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalReportStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalReportStateContext);
};
