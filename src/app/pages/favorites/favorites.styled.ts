import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

export const FavTileWrapper = styled.div`
  display: inline-block;
  margin-bottom: 25px;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 12px;
`;
