import "./App.css";
import Navbar from "./components/Navbar";
import Wonder from "./components/wonder";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Wonder />
        <MovieList />
      </div>
    </>
  );
}
export default App;
