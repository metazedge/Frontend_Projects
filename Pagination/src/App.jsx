import "./App.scss";
import { data } from "./data"
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <>
    <h1>PAGINATION PROJECT</h1>
      <Card />
      <Pagination data = {data}/>
    </>
  );
}

export default App;
