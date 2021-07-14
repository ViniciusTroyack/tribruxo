import logo from './logo.svg';
import './App.css';
import Students from './components/Students';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
        <Students />
      </div>
    </div>
  );
}

export default App;
