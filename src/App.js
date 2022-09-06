import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemCount from './Components/ItemCounst';

function App() {
  

  return (
    <div>
      <Navbar />
      <hr />
      <ItemCount stock ={5} initial={0} onAdd={0}/>
      
    </div>
  );
}

export default App;
