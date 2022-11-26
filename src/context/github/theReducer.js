const theReducer = (state, action) => {
  switch (action.type) {
    case "GET_APPLICATION":
      return {
        ...state,
        applicationData: action.payload,
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

    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "CLEAR_APPLICATIONS":
      return {
        ...state,
        applications: []
      };
    case "CLEAR_RESOURCES":
      return {
        ...state,
        resources: []
      };

    default:
      return state;
  }
};

export default theReducer;
