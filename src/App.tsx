import { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function getUsers() {
      const response = await api.get("api/", {
        params: {
          gender: "male",
          results: 10,
          page: 1,
        },
      });
      const data = response.data;
    }
    getUsers();
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <section className="users">
        <div className="user">
          <img
            className="user__image"
            src="https://placeimg.com/100/100/people"
            alt=""
          />
          <div className="user__info">
            <h3 className="user__name">Nome</h3>
            <span className="user__email">email</span>
          </div>
        </div>
        <div className="user">
          <img
            className="user__image"
            src="https://placeimg.com/100/100/people"
            alt=""
          />
          <div className="user__info">
            <h3 className="user__name">Nome</h3>
            <span className="user__email">email</span>
          </div>
        </div>
        <div className="user">
          <img
            className="user__image"
            src="https://placeimg.com/100/100/people"
            alt=""
          />
          <div className="user__info">
            <h3 className="user__name">Nome</h3>
            <span className="user__email">email</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
