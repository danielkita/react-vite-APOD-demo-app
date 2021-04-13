import React from "react";
import Favorites from "./favorites";
import { getImagesFromLocalStorage } from "../../utils/utils";

const FavoritesContainer = () => {
  const dates = getImagesFromLocalStorage();

  return <Favorites dates={dates} />;
};

export default FavoritesContainer;
