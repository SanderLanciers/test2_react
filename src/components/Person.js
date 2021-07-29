import {Section} from "./Section";

export function Person(props) {
    const {person} = props;
    return <div className="card">
        <h4>{person.name}</h4>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </div>;
}

export function Persons(props) {
    const {persons, title} = props;
    return <Section title={title}>
        {persons.map(p => <Person key={p.id} person={p}/>)}
    </Section>;
}