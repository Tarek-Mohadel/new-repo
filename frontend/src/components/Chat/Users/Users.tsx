import { useState, useEffect } from "react";

import socket from "../../../socket.io/socket";
import User from "./utils/User";
import styles from "./Users.module.css";

type user = {
  name: string;
  email: string;
};

const Users = () => {
  const [users, setUsers] = useState<user[]>([]);
  const token = localStorage.getItem("token")

  useEffect(() => {
    const getUsers = async () => {
      fetch("http://localhost:3001/users", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((users) => {
          setUsers(users.data);
        });
    };
    getUsers();
  }, []);

  return (
    <div className={styles.main}>
      <ul>
        {users.map((user) => {
          return <User name={user.name} email={user.email}/>;
        })}
      </ul>
    </div>
  );
};

export default Users;
