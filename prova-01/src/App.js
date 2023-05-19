import { Routes, Route} from 'react-router-dom';

import RandomUser from './userComponents/randomUser';
import Error from './erro';
import Home from './home';

//3 rotas
//rota1: sobre mim
//rota2: call da api
//rota3: 404 pagina de erro 

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}/>
        <Route path='random' element={<RandomUser/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  );
}

export default App;
