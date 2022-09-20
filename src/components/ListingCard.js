import React, { useState } from "react";

function ListingCard({ handleDelete, listing }) {
  
  const [favorite, changeFavorite] = useState(false)

  function handleDeleteClick(){
    handleDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => changeFavorite(!favorite)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => changeFavorite(!favorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
