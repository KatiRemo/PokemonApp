import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokeList from './pages/PokeList';
import PokeSingle from './pages/PokeSingle'
import Home from './pages/Home';
import Layout from './components/Layout';
import './app.css';
import FavList from './pages/FavList';
import About from './pages/About';

const App = () => {

  const [favorites, setFavorites] = useState([]);

  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

  useEffect(() => {
    if(getArray != 0) {
      setFavorites(getArray);
    }
}, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]); 

  const favHandler = (pokemon) => {
    let item = favorites.some(item => item.name == pokemon.name);

    if(!item) {
      setFavorites(prevState => [...prevState, pokemon]);
      // localStorage.setItem(pokemon.name, JSON.stringify(pokemon))
    }
    else {
      const newArr = [...favorites]; //makes copy of favorites
      newArr.splice(newArr.findIndex(
        item => item.name == pokemon.name), 1
        );
      setFavorites(newArr);  
      // localStorage.removeItem(pokemon.name);
    }
    console.log(favorites);
  };

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="pokemons" element={<PokeList favHandler={favHandler} favorites={favorites}/>} />
          <Route path="favorites" element={<FavList favHandler={favHandler} favorites={favorites}/>} />
          <Route path="/:pokemonName" element={<PokeSingle/>} />
          <Route path="about" element={<About/>} />
        </Route>
        </Routes>
        </BrowserRouter>
  );
};

export default App;

// use important as little as possible. Like NEVER

//  const [inputData, setInputData] = useState ('');

//  useEffect(() => {
//    axios.get('https://pokeapi.co/api/v2/pokemon')
//    .then(res => setPokemons(res.data.results));
//   //  add another axios with new api and promiseAll 
//  }, []);

// useEffect(() => {
//   console.log('EFFECT IS ON')
// }, [inputData]) //first part ()=> {} is doing something and the second part is why we're doing it. Having the empty array makes sure the useEffect is not funning on infinite loop and the effect is run only once. Change is not done only when there is data input.