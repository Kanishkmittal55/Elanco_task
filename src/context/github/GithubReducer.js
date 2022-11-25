const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_APPLICATION":
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case "GET_ALL_APPLICATIONS":
      return {
        ...state,
        applications: action.payload,
        loading: false
      };

    case "GET_RESOURCE":
      return {
        ...state,
        resourceData: action.payload,
        loading: false
      };

    case "GET_ALL_RESOURCES":
      return {
        ...state,
        resources: action.payload,
        loading: false
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: []
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default githubReducer;
