
import SearchBox from "./component/SearchBox/SearchBox";
import Button from "./component/Button/Button";
import CheckBox from "./component/CheckBox/CheckBox";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const todo1 = "Learn React"
function App() {
  return (
    <div className="App">
        <SearchBox/>
        <Button/>
        <CheckBox />
    </div>


);

}

export default App;
