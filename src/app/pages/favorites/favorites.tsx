import React from "react";
import { FavTile } from "./fav-tile";
import * as S from "./favorites.styled";
import { Button } from "../../components/button/button";
import { Link } from "react-router-dom";

const Favorites: React.FC<{ dates: string[] }> = ({ dates }) => {
  return (
    <>
      <S.Container>
        {dates.filter(Boolean).map((item) => (
          <FavTile date={item} key={item} />
        ))}
      </S.Container>
      <footer>
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </footer>
    </>
  );
};

export default Favorites;
