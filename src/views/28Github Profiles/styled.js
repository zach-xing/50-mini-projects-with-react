import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 30vw;
  height: 50px;
  padding: 20px;
  border: 0;
  border-radius: 20px;
  margin-bottom: 40px;
`;

export const UserCard = styled.div`
  width: 800px;
  color: white;
  background-color: #4c2885;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 5rem;
  .avatar {
    border-radius: 50%;
    border: 10px solid #2a2a72;
    height: 150px;
    width: 150px;
  }
  .infos {
    margin-left: 20px;
    width: 80%;
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      padding: 0;
    }
    a {
      text-decoration: none;
      color: #fff;
      background-color: #212a72;
      font-size: 0.7rem;
      padding: 0.25rem 0.5rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      display: inline-block;
    }
  }
`;

export const ErrroCard = styled.div`
  background-color: lightpink;
  color: black;
  height: 100px;
  width: 240px;
`;
