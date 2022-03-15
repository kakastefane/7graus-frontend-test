import './styles.scss';

export function User({user}) {
  const fullName = `${user.name.first} ${user.name.last}`;
  return (
    <div className="user">
      <img className="user__image" src={user.picture.large} alt={fullName} />
      <div className="user__info">
        <h3 className="user__name">
          {fullName}
        </h3>
        <span className="user__location">{user.location.country}</span>
      </div>
    </div>
  );
}

export function UserPlaceholder() {
  return (
    <div className="user user--placeholder">
      <img className="user__image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAPUlEQVR42u3OMQEAAAgDINc/pzk0xh5IQPamKgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLtwAOQb3lB10E6UQAAAABJRU5ErkJggg==" alt="" />
      <div className="user__info">
        <h3 className="user__name">Loading...</h3>
        <span className="user__location">Loading...</span>
      </div>
    </div>
  );
}
