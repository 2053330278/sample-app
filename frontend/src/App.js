import Home from './Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import { Input } from './collections/input/input';
function App() {
  return (
    <>
     {/* <Home/>
     <Input/> */}
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/input" element={<Input/>}/>
     </Routes>

     </BrowserRouter>
    </>
  );
}

export default App;
