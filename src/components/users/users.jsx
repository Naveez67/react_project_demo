import React, { useContext } from "react";
import { Context } from "../../context";
function Users() {
  const {users} = useContext(Context);
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
