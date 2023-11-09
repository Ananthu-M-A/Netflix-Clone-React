import './App.css';
import { original, action, romance, horror, comedy } from './urls';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowLatest from './Components/RowLatest/RowLatest';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowLatest title='Netflix Originals' url={original} />
      <RowLatest title='Romance' url={romance} isSmall />
      <RowLatest title='Horror' url={horror} isSmall />
      <RowLatest title='Comedy' url={comedy} isSmall />
      <RowLatest title='Action' url={action} isSmall />
    </div>
  );
}

export default App;
