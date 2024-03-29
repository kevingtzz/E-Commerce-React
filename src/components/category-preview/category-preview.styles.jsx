import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  cursor: pointer;
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;

export const Preview = styled.div`
  column-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
