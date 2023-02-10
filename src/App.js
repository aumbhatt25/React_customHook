import './App.css';
import useCounter from './Count'

function App() {
  const count = useCounter();
  const count1 = useCounter(false);

  return (
    <div className="App">
      {count}
      <br/><br/><br/>
      {count1}
    </div>
  );
}

export default App;
