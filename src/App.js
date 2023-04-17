import './App.css';

function App() {
  let click = () => {
    alert('You clicked this button');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src = "https://images.unsplash.com/photo-1618056210931-39f730ebbf67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" 
        className="App-image" 
        alt="An Audi Car"
        style={{ width: '600px', height: '400px' }} />
        <p>
          My new shiny black Audi RS 6
        </p>
        <button onClick={click}>Click me</button>
      </header>
    </div>
  );
}

export default App;
