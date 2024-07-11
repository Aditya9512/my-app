import React, { useEffect, useState } from "react";
import UserData from "./components/UserData";


const API = "Test.json";

const App = () => {
  const [users, setUsers] = useState([]); // set user data using useState

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);  
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Birthday</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            <UserData users={users} />
          ) : (
            <tr>
              <td colSpan={5}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default App;