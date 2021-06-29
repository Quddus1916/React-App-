//import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome'
function App() {
  return (
    <div className="App">
      <Hello name="nafiul" age="20"></Hello>
      <Hello name="quddus" age="20"></Hello>
      <Hello name="onim" age="20"></Hello>
      
      <Welcome  name="nafi" age="20"></Welcome>
      <Welcome  name="oni" age="20"></Welcome>
      <Welcome  name="user" age="20"></Welcome>
    </div>
  );
}

export default App;
