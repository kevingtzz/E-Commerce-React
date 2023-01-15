import styled from "styled-components";

export const BackgroundImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;

export const Body = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90px;
  padding: 0 25px;
  position: absolute;
  opacity: 0.7;

  h2 {
    color: #4a4a4a;
    font-size: 22px;
    font-weight: bold;
    margin: 0 6px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    font-weight: lighter;
  }
`;

export const DirectoryItemContainer = styled.div`
  align-items: center;
  border: 1px solid black;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  height: 240px;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;