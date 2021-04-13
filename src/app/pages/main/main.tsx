import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/button/button";
import { Image } from "../../components/image/image";

import * as S from "./main.styled";

interface Props {
  date: string;
  loading: boolean;
  onLoad: () => void;
  onNext: () => void;
  onSave: () => void;
  title: string;
  url: string;
  saveState: boolean;
}

export const Main: React.FC<Props> = ({
  date,
  loading,
  onLoad,
  onNext,
  onSave,
  title,
  url,
  saveState,
}) => (
  <S.Wrapper>
    <p>{date}</p>
    <p>{title}</p>
    <Image alt={title} url={url} onLoad={onLoad} loading={loading} />
    <S.ButtonsFirst>
      <Button big primary onClick={onNext} disabled={loading}>
        Next
      </Button>
      <Button big onClick={onSave} disabled={saveState}>
        {saveState ? "Saved" : "Save"}
      </Button>
    </S.ButtonsFirst>
    <div>
      <Link to="/fav">
        <Button>Saved photos</Button>
      </Link>
    </div>
  </S.Wrapper>
);
