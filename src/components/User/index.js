import './styles.scss';

function User({user}) {
  const fullName = `${user.name.first} ${user.name.last}`;
  return (
    <div className="user">
      <img className="user__image" src={user.picture.large} alt="" />
      <div className="user__info">
        <h3 className="user__name">
          {fullName}
        </h3>
        <span className="user__location">{user.location.country}</span>
      </div>
    </div>
  );
}

export default User;
