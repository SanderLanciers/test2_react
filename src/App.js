import './App.css';
import {NUMBER_DATA} from "./ data/data";
import {Numbers} from "./components/Numbers";

function App() {
    return (
        <div>
            <Numbers numbers={NUMBER_DATA} title="Numbers"/>
        </div>
    );
}

export default App;
