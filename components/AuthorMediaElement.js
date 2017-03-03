import React, {PropTypes} from 'react';


const AuthorMediaElement = (props) => (
  <div className="author">
    <div className="author--photo">
      <img src={props.photo} alt={props.name}/>
    </div>
    <div className="author--info">
      <span>{props.name}</span>
      <small>
        <a href={`mailto:${ props.email }`}>{props.email}</a>
      </small>
    </div>
  </div>
)

AuthorMediaElement.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default AuthorMediaElement;
