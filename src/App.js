import { useEffect, useState } from "react";
import Title from "./components/Title";
import User from "./components/User";
import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get("api/", {
        params: {
          gender: "male",
          results: 10,
          nat: "us",
        },
      });
      const data = response.data;
      setUsers(data.results);
    }
    getUsers();
  }, []);

  async function getMoreUsers(e) {
    e.preventDefault();

    const response = await api.get("api/", {
      params: {
        gender: "male",
        results: 10,
        nat: "us",
      },
    });
    const data = response.data;
    setUsers([...users, ...data.results]);
  }

  return (
    <>
      <Title>Lista de Usuários</Title>
      <section className="users">
        {users.map((user, index) => (
          <User
            key={index}
            firstName={user.name.first}
            lastName={user.name.last}
            picture={user.picture.medium}
            email={user.email}
          />
        ))}
      </section>
      <button onClick={getMoreUsers}>More Users</button>
    </>
  );
}

export default App;
