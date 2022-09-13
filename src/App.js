import './App.css';

function Header() {
  return <h2>Header</h2>;
}
function Input() {
  const holder = 'input text here';
  const style = { width: '400px' };
  return <input placeholder={holder} style={style} />;
}

function Btn() {
  const isLogged = true;
  return <button>{isLogged ? 'Sign Out' : 'Sign In'}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Btn />
    </div>
  );
}

export default App;
