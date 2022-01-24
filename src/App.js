import React from 'react';
import Header from './components/Header';
import PokeList from './components/PokeList';
import Footer from './components/Footer';

const App = () => {
 
//  const [inputData, setInputData] = useState ('');

//  useEffect(() => {
//    axios.get('https://pokeapi.co/api/v2/pokemon')
//    .then(res => setPokemons(res.data.results));
//   //  add another axios with new api and promiseAll 
//  }, []);

// useEffect(() => {
//   console.log('EFFECT IS ON')
// }, [inputData]) //first part ()=> {} is doing something and the second part is why we're doing it. Having the empty array makes sure the useEffect is not funning on infinite loop and the effect is run only once. Change is not done only when there is data input.

  return (
    <div>
      <Header />
      <PokeList />
      <Footer />
    </div>
  );
};

export default App;

// use important as little as possible. Like NEVER