import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #4682b4;
`;

const FromDiv = styled.form`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  color: white;
  border-radius: 15px;
  width: 30%;
  h1 {
    text-align: center;
    margin: 20px 0;
  }
  input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
    &:focus {
      border-bottom-color: lightblue;
      & + label span {
        color: lightblue;
        transform: translateY(-30px);
      }
    }
  }
  label {
    position: absolute;
    top: 15px;
    font-size: 18px;
    span {
      display: inline-block;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
  button {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    background: lightblue;
    padding: 15px;
    font-size: 16px;
    border: 0;
    border-radius: 5px;
  }
  p {
    margin: 20px 0;
    a {
      text-decoration: none;
      color: lightblue;
    }
  }
`;

const CustomInput = ({ labelText }) => {
  return (
    <div style={{position: 'relative',  margin: "20px 0 40px"}}>
      <input type="text" required />
      <label>
        {labelText.split("").map((item, index) => (
          <span key={item} style={{ transitionDelay: `${index * 50}ms` }}>{item}</span>
        ))}
      </label>
    </div>
  );
};

function FormWave() {
  return (
    <Main>
      <FromDiv>
        <h1>Please Login</h1>
        <CustomInput labelText={"Email"} />
        <CustomInput labelText={"Password"} />
        <button>LOGIN</button>
        <p>
          Don't have an account？
          <a href="https://github.com/Zeekg-zk">Register</a>
        </p>
      </FromDiv>
    </Main>
  );
}

export default FormWave;
