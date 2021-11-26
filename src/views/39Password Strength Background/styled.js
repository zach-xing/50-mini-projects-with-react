import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const BgBlur = styled.div`
  z-index: -1;
  position: absolute;
  top: -20px;
  bottom: -20px;
  left: -20px;
  right: -20px;
  background: url("https://images.unsplash.com/photo-1556745757-8d76bdb6984b")
    no-repeat center center/cover;
  filter: blur(${(props) => 20 - props.blur}px);
`;

export const LoginDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 50px;
  background-color: #fff;
  width: 450px;
  height: 400px;
  border-radius: 10px;
  text-align: center;
  button {
    margin-top: 30px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    background-color: black;
  }
`;

export const CustomInput = styled.div`
  label {
    float: left;
    margin: 10px 0;
    font-size: 16px;
  }
  input {
    width: 100%;
    border: 1.5px solid black;
    padding: 10px;
    border-radius: 5px;
  }
`;