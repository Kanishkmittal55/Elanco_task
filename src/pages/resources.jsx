import React from "react";
import UserResourcesResults from "../components/users/UserResourcesResult";
import UserResourcesSearch from "../components/users/UserResoucesSearch";

function Home() {
  return (
    <div>
      {/*Search Component  */}
      <UserResourcesSearch />
      <UserResourcesResults />
    </div>
  );
}

export default Home;
