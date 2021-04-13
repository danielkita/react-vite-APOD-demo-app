import React from "react";
import * as S from "./tile.styled";

export const Tile = ({ url }: { url: string }) => {
  return <S.Wrapper url={url} />;
};
