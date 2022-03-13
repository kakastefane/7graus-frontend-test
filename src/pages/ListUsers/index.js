import { useEffect, useState } from 'react';
import User from '../../components/User';
import { api } from '../../services/api';

import './styles.scss';

function ListUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await api.get('api/', {
      params: {
        gender: 'male',
        results: 10,
      },
    });
    setUsers([...users, ...data.results]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='container'>
      <section className='users'>
        {users.map((user, index) => (
          <User
            key={index}
            user={user}
          />
        ))}
      </section>
      <button className='loadmore-button' onClick={fetchUsers}>More Users</button>
    </div>
  );
}

export default ListUsers;