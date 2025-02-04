import { useHistory } from "react-router";
import Stars from "../Stars";
import "./style.css";

const ExperienceSmall = ({
  name,
  description,
  rating,
  price,
  seats,
  id,
  thumbnails = [],
}) => {
  const history = useHistory();
  const thumbs = thumbnails ? thumbnails.split(",") : [];

  return (
    <div
      className="div-experience"
      onClick={() => {
        history.push(`/app/experience/${id}`);
      }}
    >
      {thumbs.length > 0 && (
        <div className="thumbnail-div">
          <img
            className="thumbnail"
            src={`${process.env.REACT_APP_BACKEND_URL}/fotos/${
              thumbs[0] || "default-thumbnail.png"
            }`}
            alt="thumbnail"
          />
        </div>
      )}
      <div className="info-div">
        <h1 className="title">{name}</h1>
        <div className="info-box">
          <div className="left-info-box">
            <p className="description">{description}</p>
          </div>

          <div className="right-info-box">
            {rating > 0 && <Stars rating={rating} />}
            <p className="seats-experience">{seats} plazas disponibles</p>
            <p className="price-experience">{price}€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSmall;
