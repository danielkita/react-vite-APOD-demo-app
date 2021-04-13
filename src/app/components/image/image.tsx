import React from "react";
import { Loader } from "../loader/loader";
import * as S from "./image.styled";

interface Props {
  url: string;
  alt: string;
  loading: boolean;
  onLoad: () => void;
}

export const Image = ({ url, alt, loading, onLoad }: Props) => (
  <S.Wrapper loading={loading}>
    {loading && <Loader />}
    <img src={url} alt={alt} onLoad={onLoad} />
  </S.Wrapper>
);
