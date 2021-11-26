import styled from 'styled-components'

export const Main = styled.main`
  background: #efefbb;
  background: linear-gradient(to right, #d4d3dd, #efefbb);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  text-align: center;
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

export const PokemonDiv = styled.div`
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
  img {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    text-align: center;
  }
`;