import { Routes } from 'react-router-dom';
import Routers from './router/Router';
import NavBar from './components/NavBar/index';

const App = () => {
  return (
    <main>
      <NavBar />
      <Routers />
    </main>
  );
};

export default App;
