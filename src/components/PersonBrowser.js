import React, {useState} from 'react';
import {Section} from "./Section";
import {Person} from "./Person";

export function PersonBrowser(props) {
    const {persons} = props;
    const [shownPerson, setShownPerson] = useState(persons[0]);

    return <Section title="Mijn Favoriete Personen">
        <Person person={shownPerson}/>
    </Section>;
}

