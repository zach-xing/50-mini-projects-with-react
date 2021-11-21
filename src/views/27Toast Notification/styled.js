import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  overflow: hidden;
  background-color: rebeccapurple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToastsGroup = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Toasts = styled.div`
  background-color: #fff;
  color: ${props => props.type === "info" ? "rebeccapurple" : props.type === "sucess" ? "green" : "red"};
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0.5rem;
`;