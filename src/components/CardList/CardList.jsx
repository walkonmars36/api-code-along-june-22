import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./CardList.scss";

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users &&
        users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name.first}
            image={user.picture.large}
            email={user.email}
            phoneNumber={user.phone}
          />
        ))}
    </div>
  );
};

export default CardList;
