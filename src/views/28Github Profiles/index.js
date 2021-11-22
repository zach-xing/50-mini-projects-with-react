import React, { useState } from "react";
import { Main, SearchInput } from "./styled";
import Card from "./Card";

function GithubProfiles() {
  const [usename, setUsername] = useState("");

  const submitClick = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      setUsername(e.target[0].value);
    }
  };

  return (
    <Main>
      <form onSubmit={submitClick}>
        <SearchInput placeholder="Search a github profile" />
      </form>
      <Card name={usename} />
    </Main>
  );
}

export default GithubProfiles;
