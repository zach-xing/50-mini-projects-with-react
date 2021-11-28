import styled, {keyframes} from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  background-color: #577bc1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background-color: #000957;
  color: #fff;
  border-radius: 15px;
  margin: 20px auto;
  padding: 50px 80px;
  max-width: 768px;
  position: relative;
  p {
    line-height: 28px;
    text-align: justify;
  }
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    height: 75px;
    width: 75px;
    object-fit: cover;
  }
  .info {
    margin-left: 10px;
  }
`;

const grow = keyframes`
  0% {
    transform: scaleX(0);
  }
`;

export const ProgressBar = styled.div`
  background-color: #fff;
  height: 4px;
  width: 100%;
  animation: ${grow} 10s linear infinite;
  transform-origin: left;
`;