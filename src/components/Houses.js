import {Card} from "./Card";
import {Section} from "./Section";

export function House(props) {
    const {house} = props;


    onmessage = () => {
        if (this.stores.appState.currentScreen==='MessagesPage') return;
        this.popup.show();
    }
    return <Card className={house.status}>
        <h3>{house.name}</h3>
        <div>type: {house.type}</div>
        <div>adress: {house.address}</div>
        <div>price: {house.price}</div>
        <div>status: {house.status}</div>
        {house.status === "for sale" &&
        <button onClick={house.status="option"}>in option</button>
        }
        {(house.status === "option" && house.status === "for sale") ? ""
            : <button onClick={house.status="sold"}>sold</button>
        }
    </Card>
}

export function Houses(props) {
    const {houses, title} = props;
    return <Section title={title}>
        {houses.map(h => <House key={h.name} house={h}/>)}
    </Section>

}