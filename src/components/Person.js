export function Person(props) {
    const {person} = props;
    return <div className="card">
        <h4>{person.name}</h4>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </div>
}

