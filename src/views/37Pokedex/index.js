import React, { useState, useEffect } from "react";
import { Main, PokeContainer, PokemonDiv } from "./styled";

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

function Pokedex() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      for (let i = 1; i <= 150; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        let obj = {
          id: data.id,
          showId: data.id.toString().padStart(3, '0'),
          name: data.name,
          colorType: colors[data.types[0].type.name]
        };
        console.log(obj);
        setPokemons(prev => {
          let arr = [...prev];
          arr.push(obj);
          return arr
        });
      }
    };
    fetchPokemons().then(() => {
      console.log('done');
    });
  }, []);

  return (
    <Main>
      <h1>Pokedex</h1>
      <PokeContainer>
        {
          pokemons.lenght !== 0 && pokemons.map((item, index) => {
            return (
              <PokemonDiv
                key={item.id}
                style={{ backgroundColor: item.colorType }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                  alt={item.name}
                />
                <div>{item.showId}</div>
                <div>{item.name}</div>
                <div>{item.colorType}</div>
              </PokemonDiv>
            );
          })
        }
      </PokeContainer>
    </Main>
  );
}

export default Pokedex;
