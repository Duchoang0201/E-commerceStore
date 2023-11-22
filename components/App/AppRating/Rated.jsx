import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import HalfStar from "./star-half-filled.png";
import StarGray from "./StarGray.png";
import StarYellow from "./StarYellow.png";

export default function Rated({ data }) {
  const rated = data.rate;

  const fixRated =
    rated > Math.floor(rated) && rated < Math.ceil(rated)
      ? Math.floor(rated) + 0.5
      : rated;

  const starArray = Array.from({ length: Math.floor(fixRated) }, (_, index) => (
    <div key={index}>
      <Image src={StarYellow} width="auto" height="auto" alt="'StarYellow" />
    </div>
  ));
  const starLeft = Array.from(
    { length: 5 - Math.ceil(fixRated) },
    (_, index) => (
      <div key={index}>
        <Image src={StarGray} width="auto" height="auto" alt="'StarGray" />
      </div>
    ),
  );
  return (
    <div className="flex flex-row items-center">
      {starArray}
      {Math.ceil(fixRated) - fixRated === 0.5 && (
        <Image src={HalfStar} width="auto" height="auto" alt="'HalfStar" />
      )}
      {starLeft}{" "}
    </div>
  );
}

Rated.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
