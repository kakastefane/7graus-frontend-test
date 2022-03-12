import React from "react";

// import { Container } from './styles';

function User(props) {
  return (
    <div className="user">
      <img className="user__image" src={props.picture} alt="" />
      <div className="user__info">
        <h3 className="user__name">
          {props.firstName} {props.lastName}
        </h3>
        <span className="user__email">{props.email}</span>
      </div>
    </div>
  );
}
export default User;
