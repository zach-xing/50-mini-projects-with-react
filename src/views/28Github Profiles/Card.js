import React, { useState, useEffect } from "react";
import { UserCard } from "./styled";

function Card(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (props.name !== "") {
      let curData = {};
      const fetchUserInfo = async () => {
        const res = await fetch(`https://api.github.com/users/${props.name}`);
        const temp = await res.json();
        curData = temp;
      };
      const fetchRepos = async () => {
        const res = await fetch(
          `https://api.github.com/users/${props.name}/repos?sort=created`
        );
        const repos = await res.json();
        curData = { ...curData, repos };
        console.log(curData);
        setData(curData);
      };

      fetchUserInfo();
      fetchRepos();
    }
  }, [props.name]);

  if (props.name === "") {
    return <div />;
  } else {
    return (
      <UserCard>
        <img src={data.avatar_url} alt="" className="avatar" />
        <div className="infos">
          <h2>{data.name}</h2>
          <ul>
            <li>
              {data.followers} <strong>Followers</strong>
            </li>
            <li>
              {data.following} <strong>Following</strong>
            </li>
            <li>
              {data.public_repos} <strong>Repos</strong>
            </li>
          </ul>
          {data.repos &&
            data.repos.map((item) => {
              return (
                <a
                  key={item.id}
                  target="_blank"
                  href={item.html_url}
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              );
            })}
        </div>
      </UserCard>
    );
  }
}

export default Card;
