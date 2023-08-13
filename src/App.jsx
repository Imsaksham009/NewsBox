import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navbar';
import Note from './components/Notes/Note';



const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route index element={<h1>This is Home Page</h1>} />
      <Route path='mynotes' element={<Note />} />
      <Route path='about' element={<h1>About Page</h1>} />
    </Route>
  )
);

export default App;
