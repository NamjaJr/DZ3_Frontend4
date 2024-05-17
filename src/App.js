import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";


const App = () => {
  return (
      <div>
        <MainPage />
        <AboutPage />
        <TodosPage />
      </div>
  );
};

export default App;