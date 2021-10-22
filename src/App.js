import './App.css';
import {HOUSE_DATA} from "./ data/data";
import {Houses} from "./components/Houses";


function App() {
    return (
        <>
            <Houses houses={HOUSE_DATA} title={"Luxary Houses for sale"}></Houses>
        </>
    );
}

export default App;
