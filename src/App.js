import './App.css';
import Class from './components/Class';
import Functional from './components/Functional';
function App() {
  return (
    <div className="App">
      <h1 className='header'>Styling using Functional and Class Component</h1>
      <Class/>
      <Functional/>
    </div>
  );
}

export default App;
