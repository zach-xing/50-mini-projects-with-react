import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

const Main = styled.main`
  background-color: #22254b;
  position: relative;
`;

const Header = styled.header`
  height: 77px;
  width: 100%;
  background-color: #373b69;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .search {
    background-color: transparent;
    border: 2px solid #22254b;
    border-radius: 50px;
    color: white;
    font-size: 20px;
    padding: 10px;
    margin: 0 20px;
  }
`;

const Movies = styled.div`
  display: flex;
  margin: 10px auto 0;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Movie = styled.div`
  width: 300px;
  margin: 10px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  background-color: #373b69;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  img {
    width: 100%;
  }
  .info {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    h3 {
      margin-top: 0;
      color: #eeeeee;
    }
    span {
      font-weight: bold;
      font-size: 18px;
    }
  }
  .overview {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    padding: 10px;
    transform: translateY(101%);
    overflow-y: auto;
    transition: transform 0.3s ease-in;
  }
  &:hover .overview {
    transform: translateY(0);
  }
`;

const API_UPL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

function MovieApp() {

  const [movies, setMovies] = useState([])
  const [url, setUrl] = useState(API_UPL);

  useEffect(() => {
    const fetchDate = async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    };
    fetchDate().then((res) => {
      setMovies(res.results);
    });
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里的 elments.search 中的 search 是 name 属性传递的
    const { value } = e.target.elements.search;
    if (value === "") {
      window.location.reload();
    } else {
      setUrl(SEARCH_API + value);
    }
  }

  return (
    <Main>
      <Header>
        <form onSubmit={handleSubmit}>
          <input name="search" type="text" className="search" placeholder="Search" />
        </form>
      </Header>

      <Movies>
        {
          movies.map((item) => {
            return (
              <Movie key={item.id}>
                <img src={IMG_PATH + item.poster_path} alt="" />
                <div className="info">
                  <h3>{item.original_title}</h3>
                  <span
                    style={{
                      color:
                        item.vote_average >= 8
                          ? "green"
                          : item.vote_average >= 5
                          ? "orange"
                          : "red",
                    }}
                  >
                    {item.vote_average}
                  </span>
                </div>

                <div className="overview">
                  <h3>Overview</h3>
                  {item.overview}
                </div>
              </Movie>
            );
          })
        }
      </Movies>
    </Main>
  )
}

export default MovieApp
