import React, {useState, useEffect} from "react";
import styled from "styled-components";
import useCustomFetch from "./useCustomFetch";

const CardDiv = styled.div`
  width: 350px;
  height: 400px;
  background-color: #e3e3e3;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .info {
    padding: 10px;
    h3 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;

// 传入 useCustomFetch 的回调函数
function fetcher() {
 return new Promise((resolve) => {
   setTimeout(() => {
     resolve({
       imgUrl: "https://source.unsplash.com/random/350x200",
       title: "Lorem ipsum dolor sit amet",
       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
     });
   }, 2000);
 });
}

// 初始数据
const initialState = {
  imgUrl: "",
  title: "",
  desc: ""
};

function Card() {

  const [data, setData] = useState(initialState);
  const res = useCustomFetch(fetcher);

  useEffect(() => {
    console.log(res);
    if(res !== null) {
      setData(res);
    }
  }, [res]);

  return (
    <CardDiv>
      <img src={data.imgUrl} alt="" />

      <div className="info">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </CardDiv>
  );
}


export default Card;
