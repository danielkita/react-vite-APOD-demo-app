import styled from "styled-components";

export const Wrapper = styled.div<{ url: string }>`
  width: 200px;
  height: 200px;
  border: 1px solid #e5e5e5;
  padding: 10px;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  display: inline-block;
`;
