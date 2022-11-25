import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, loading, applications } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.length > 0
          ? users.map((user) => (
              <ul>
                {" "}
                <li>{user.Date}</li>
              </ul>
            ))
          : applications.map((app) => <div>{app}</div>)}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
