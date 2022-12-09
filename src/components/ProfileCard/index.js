import { Link } from "react-router-dom";
import "./profileCard.css";

const ProfileCard = (props) => {
  return (
    <div className="profileCard">
      <Link to={`/service/${props.id}`}>
        <img src={props.imageUrl} alt={props.name} className="cardImage" />
      </Link>
      <div className="cardName">{props.name}</div>
      <div className="cardRate">
        {props.star}/5&ensp;
        <div className="cardStar">&#9733;</div>
      </div>
    </div>
  );
};

export { ProfileCard };
