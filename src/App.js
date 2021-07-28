import './App.css';
import {CARS, NUMBER_DATA, PERSON_DATA} from "./ data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Person";

function App() {
    return (
        <div>
            <Numbers numbers={NUMBER_DATA} title="Numbers"/>
            <Numbers numbers={NUMBER_DATA.filter(n => n > 6)} title="Numbers>6"/>
            <Numbers numbers={NUMBER_DATA.map(n => n * 2)} title="Numbers*2"/>
            <Cars cars={CARS} title="Auto's"/>
            <Persons persons={PERSON_DATA} title="Personen"/>
            <Persons persons={[...PERSON_DATA].sort((pl,pr)=> pl.age-pr.age)} title="Personen volgens leeftijd"/>
        </div>
    );
}

export default App;
