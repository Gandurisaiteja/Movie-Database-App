import { imageUrl } from "../services/api";

import "./CastCard.css";

function CastCard({ cast }) {
  return (
    <div className="cast-card">
      <img
        src={`${imageUrl}${cast.profile_path}`}
        alt={cast.original_name}
      />

      <h4>{cast.original_name}</h4>

      <p>{cast.character}</p>
    </div>
  );
}

export default CastCard;