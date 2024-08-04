import React, { useState } from "react";
import ImageButton from "../global/ImageButton";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/images/search/search-icon.png";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [isCitySelected, setIsCitySelected] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="search">
      <input
        type="text"
        required
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <ImageButton
        imageUrl={searchIcon}
        onButtonClick={() => {
          navigate("/display");
        }}
        buttonClassName="search-button"
      />
    </div>
  );
}
