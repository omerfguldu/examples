import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function User({ userData }) {
  const { id } = useParams();
  const [newData, setNewData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setNewData(res.data))
      .catch(() => {})
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <div>Loading...</div>}
      <div>
        <h1>User ID : {id}</h1>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Phone:</strong> {userData.phone}
        </p>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
        <br />
        <br />
        <hr />
        <br />
        <h1>User ID : {id}</h1>
        <p>
          <strong>Name:</strong> {newData.name}
        </p>
        <p>
          <strong>Email:</strong> {newData.email}
        </p>
        <p>
          <strong>Phone:</strong> {newData.phone}
        </p>
        <p>
          <strong>Username:</strong> {newData.username}
        </p>
      </div>
      <Link to={`/user/${+id + 1}`}>Next User ({+id + 1})</Link>
    </>
  );
}
