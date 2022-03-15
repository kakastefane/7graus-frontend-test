import { useEffect, useState } from 'react';
import { User, UserPlaceholder } from '../../components/User';

import './styles.scss';

function ListUsers({ getData }) {
  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const usersPlaceholder = [...Array(10)]; //only for generate 10 placeholders on load.

  const getUsers = async () => {
    setLoading(true);
    const { data } = await getData(page);
    setUsers([...users, ...data.results]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <section className='users'>
        {users.map((user, index) => {
          return (
            <User
              key={index}
              user={user}
              loading={loading}
            />
          )}
        )}
        {loading && 
          usersPlaceholder.map((placeholder, index) => (
            <UserPlaceholder key={index} />
          )
        )}
      </section>
      <button 
        className='loadmore-button'
        onClick={(e) => {
          e.preventDefault();
          getUsers();
        }}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Load more users'}
      </button>
    </div>
  );
}

export default ListUsers;