import React, { useState } from "react";

const [city, setCity] = useState("");
const [isCitySelected, setIsCitySelected] = useState(false);

export default function SearchBar() {
  return (
    <div className="search">
      <textarea
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {!isCitySelected && <button></button>}
    </div>
  );
}
