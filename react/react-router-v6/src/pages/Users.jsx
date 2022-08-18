import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users({ userData }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  const sendUserData = (user) => {
    userData(user);
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link onClick={() => sendUserData(user)} to={`${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
