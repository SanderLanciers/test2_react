import React, {useState} from 'react';
import {Section} from "./Section";
import {Person} from "./Person";

export function PersonBrowser(props) {
    const {persons} = props;
    const [shownPerson, setShownPerson] = useState(persons[0]);

    function setNextShownPerson() {
        const indexOfShownPerson = persons.findIndex(p => p.id === shownPerson.id);
        const indexOfNextPerson = indexOfShownPerson < persons.length - 1 ? indexOfShownPerson + 1 : 0;
        setShownPerson(persons[indexOfNextPerson]);
    }

    function setPrevShownPerson() {
        const indexOfShownPerson = persons.findIndex(p => p.id === shownPerson.id);
        const indexOfNextPerson = indexOfShownPerson === 0 ? persons.length - 1 : indexOfShownPerson - 1;
        setShownPerson(persons[indexOfNextPerson]);
    }

    return <Section title="Mijn Favoriete Personen">
        <div className="personWithButtons">
            <div>
                <button onClick={() => setPrevShownPerson()}>&lt;</button>
            </div>
            <Person person={shownPerson}/>
            <div>
                <button onClick={() => setNextShownPerson()}>&gt;</button>
            </div>
        </div>
    </Section>;
}

