function Car(props) {
    const {car} = props;
    return <div className="card car">
        <h4>{car.name}</h4>
        <div>merk: {car.brand}</div>
        <div>type: {car.type}</div>
        <div>kleur: {car.color}</div>
    </div>;
}

export function Cars(props) {
    const {cars, title} = props;

    return <div className="section">
        <h3>{title}</h3>
        {cars.map((c) => <Car key={c.name} car={c}/>)}
    </div>;
}