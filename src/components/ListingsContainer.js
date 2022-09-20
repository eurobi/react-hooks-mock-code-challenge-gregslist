import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ handleDelete, listings }) {

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => <ListingCard handleDelete={handleDelete} key={listing.id} listing={listing}></ListingCard>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
