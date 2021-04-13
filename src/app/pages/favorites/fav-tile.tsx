import React, { useEffect } from "react";
import { useGetPhoto } from "../../hooks/use-get-photo";
import { Tile } from "../../components/tile/tile";
import * as S from "./favorites.styled";

export const FavTile = ({ date }: { date: string }) => {
  const { fetch: fetchPhoto, data } = useGetPhoto();

  useEffect(() => {
    fetchPhoto({ date });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <S.FavTileWrapper>
      <Tile url={data.url} />
      <S.Description>{data.date}</S.Description>
      <S.Description>{data.title}</S.Description>
    </S.FavTileWrapper>
  );
};
