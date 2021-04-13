import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ loading?: boolean }>`
  padding: 15px;
  border: 1px solid #888;
  display: inline-block;
  position: relative;
  min-width: 150px;
  min-height: 150px;

  img {
    max-width: 500px;
    vertical-align: middle;
    transition: 0.2s ease-in-out;

    ${(props) =>
      props.loading &&
      css`
        background: #888;
        opacity: 0.2;
      `};
  }
`;
