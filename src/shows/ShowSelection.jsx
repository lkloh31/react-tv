import "./shows.css";
import { useState } from "react";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  const [selectedShowName, setSelectedShowName] = useState();
  const handleShowClick = (show) => {
    setSelectedShow(show);
    setSelectedShowName(show.name);
  };

  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          onClick={() => handleShowClick(show)}
          className={selectedShowName === show.name ? "show selected" : "show"}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
