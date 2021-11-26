import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Carousel = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  overflow: hidden;
`;

export const Imgs = styled.img`
  height: 500px;
  width: 500px;
  transition: transform 0.6s ease-in-out;
  transform: translateX(-${(props) => props.index * 500}px);
`;

export const ToggleButtons = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  display: flex;
  justify-content: space-between;
  button {
    border: 0;
    width: 70px;
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
  }
`;