import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import theReducer from "./theReducer";

const theContext = createContext();

const URI = process.env.REACT_APP_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    applicationData: [],
    applications: [],
    resources: [],
    resourceData: [],
    loading: false
  };

  const [state, dispatch] = useReducer(theReducer, initialState);

  // Search all Applications
  const searchAllApplications = async (text) => {
    console.log(`${URI}/applications`);
    setLoading();

    const response = await fetch(`${URI}/applications/${text}`);

    if (response.status === 404) {
      window.location = "/notFound";
    } else {
      const data = await response.json();
      window.location = `/applications/${text}`;
      dispatch({
        type: "GET_APPLICATION",
        payload: data
      });
    }
  };

  // just Search all Applications
  const justsearchAllApplications = async (text) => {
    // console.log(`${URI}/applications`);
    setLoading();

    const response = await fetch(`${URI}/applications/${text}`);

    if (response.status === 404) {
      window.location = "/notFound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_APPLICATION",
        payload: data
      });
    }
  };

  // Get All Applications
  const getAllApplications = async (text) => {
    setLoading();
    const response = await fetch(`${URI}/applications`);
    if (response.status === 404) {
      window.location = "/notFound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_ALL_APPLICATIONS",
        payload: data
      });
    }
  };

  // Search all Resources
  const searchAllResources = async (text) => {
    console.log(`${URI}/resources`);
    setLoading();

    const response = await fetch(`${URI}/resources/${text}`);
    if (response.status === 404) {
      window.location = "/notFound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_RESOURCE",
        payload: data
      });
    }
  };

  // Get All Resources
  const getAllResources = async () => {
    setLoading();
    const response = await fetch(`${URI}/resources`);
    if (response.status === 404) {
      window.location = "/notFound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_ALL_RESOURCES",
        payload: data
      });
    }
  };

  const clearApplications = () => dispatch({ type: "CLEAR_APPLICATIONS" });
  const clearResources = () => dispatch({ type: "CLEAR_RESOURCES" });

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <theContext.Provider
      value={{
        applicationData: state.applicationData,
        resources: state.resources,
        applications: state.applications,
        resourceData: state.resourceData,
        searchAllApplications,
        getAllApplications,
        justsearchAllApplications,
        searchAllResources,
        getAllResources,
        clearApplications,
        clearResources
      }}
    >
      {children}
    </theContext.Provider>
  );
};

export default theContext;
