import React, { useEffect, useState } from "react";
import Hoc from "../hoc";

const UsersList = ({ data }) => {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = Hoc(UsersList, "users","name");

export default SearchUsers;