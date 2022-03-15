import Header from "./components/Header";
import ListUsers from "./pages/ListUsers";
import { getData } from "./services/api";

function App() {
  return (
    <>
      <Header />
      <ListUsers getData={getData} />
    </>
  )
}

export default App;
