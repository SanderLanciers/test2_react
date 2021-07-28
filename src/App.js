import './App.css';
import {NUMBER_DATA} from "./ data/data";
import {Numbers} from "./components/Numbers";

function App() {
    return (
        <div>
            <Numbers numbers={NUMBER_DATA} title="Numbers"/>
            <Numbers numbers={NUMBER_DATA.filter(n => n > 6)} title="Numbers>6"/>
            <Numbers numbers={NUMBER_DATA.map(n => n * 2)} title="Numbers*2"/>
        </div>
    );
}

export default App;
