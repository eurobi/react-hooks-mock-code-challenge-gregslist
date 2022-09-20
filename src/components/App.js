import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setlistings] = useState([])
  const [search, setSearch] = useState('')

  function handleDelete(listingId){
    fetch(`http://localhost:6001/listings/${listingId}`,{
      method: "DELETE",
    })
    .then(r => r.json())
    .then(setlistings(listings.filter((listing) => listing.id !== listingId)))
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(listings => setlistings(listings))
  },[])

  const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(search))

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer handleDelete={handleDelete} listings={filteredListings} />
    </div>
  );
}

export default App;
