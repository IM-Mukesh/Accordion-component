import './App.css';
import Accordion from './Accordion'
import data from "./content"

function App() {
  const content = data
  const title = 'Rabit and Tortorise story:';
  return (
    <div className="App">
     <Accordion content={content} title={title} />
    </div>
  );
}

export default App;
