import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { Cost, InstanceId, Datex } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-centre space-x-4 card-body">
        <div className="avatar"></div>

        <div>
          <h2 className="card-title">{Date}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${InstanceId}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
