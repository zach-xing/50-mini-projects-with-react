import styled from 'styled-components'

export const Main = styled.main`
  background-color: #fff1af;
  text-align: center;
  h1 {
    margin: 0;
    padding: 20px;
  }
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  img {
    object-fit: cover;
    margin: 10px;
    height: 300px;
    width: 300px;
  }
`;