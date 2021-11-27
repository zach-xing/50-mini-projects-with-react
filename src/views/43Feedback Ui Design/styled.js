import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1ca75;
`;

export const Panel = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-size: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  max-width: 400px;
`;

export const RatingsContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

export const Rating = styled.div`
  flex: 1;
  cursor: pointer;
  padding: 20px;
  margin: 10px 5px;
  &.active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const CustomBtn = styled.button`
  background-color: #302d2b;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px 30px;
  cursor: pointer;
`;

export const ResultDiv = styled.div`
  text-align: center;
`;