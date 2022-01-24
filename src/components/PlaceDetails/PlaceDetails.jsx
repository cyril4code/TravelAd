import React from "react";

import axios from "axios";

const PlaceDetails = ({ places }) => {
  return <h1>{places.name}</h1>;
};

export default PlaceDetails;
