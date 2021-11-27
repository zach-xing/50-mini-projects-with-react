import React, { useState, useEffect } from "react";
import { Main, Container, Header, ResultDiv } from "./styled";

function LiveUserFilter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api?results=50");
      const { results } = await res.json();
      console.log(results);
      setData(results);
    };
    fetchData();
  }, []);

  const handeInput = (e) => {
    let arr = [...data]
    const str = e.target.value.toLowerCase();
    arr.forEach((item) => {
      const temp = `${item.name.first} ${item.name.last}`.toLowerCase();
      if (temp.includes(str)) {
        item.hide = false;
      } else {
        item.hide = true;
      }
    })
    setData(arr)
  }

  return (
    <Main>
      <Container>
        <Header>
          <h4>Live User Filter</h4>
          <input type="text" placeholder="Search" onInput={handeInput} />
        </Header>

        <ResultDiv>
          {data.length > 0 &&
            data.map((item, index) => {
              return (
                <li key={index} className={item.hide ? "hide" : ""}>
                  <img src={item.picture.large} alt=""></img>
                  <div>
                    <h4>
                      {item.name.first} {item.name.last}
                    </h4>
                    <p>
                      {item.location.city}, {item.location.country}
                    </p>
                  </div>
                </li>
              );
            })}
        </ResultDiv>
      </Container>
    </Main>
  );
}

export default LiveUserFilter;
