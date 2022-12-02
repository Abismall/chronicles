import AppRoutes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
