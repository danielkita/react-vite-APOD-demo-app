import styled, { css } from "styled-components";

export const Wrapper = styled.button<{ big?: boolean; primary?: boolean }>`
  padding: 0.4em 1.1em;
  background: #fff;
  border: 1px solid #e5e5e5;
  display: inline-block;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #40a9ff;
    color: #fff;
  }

  ${(props) =>
    props.big &&
    css`
      font-size: 18px;
    `};

  ${(props) =>
    props.primary &&
    css`
      border-color: #1890ff;
      background: #1890ff;
      color: #fff;
    `};
`;
