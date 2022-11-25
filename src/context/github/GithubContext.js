import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const URI = process.env.REACT_APP_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    applications: [],
    resources: [],
    resourceData: [],
    user: {},
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search results
  const searchAllApplications = async (text) => {
    console.log(`${URI}/applications`);
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
  const getAllResources = async (text) => {
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

  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        resources: state.resources,
        applications: state.applications,
        resourceData: state.resourceData,
        searchAllApplications,
        getAllApplications,
        searchAllResources,
        getAllResources,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
