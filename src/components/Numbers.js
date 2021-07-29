import {Section} from "./Section";

export function Numbers(props) {
    const {numbers, title} = props;

    return <Section title={title}>
        {numbers.map((n, i) => <div className="card" key={i}>{n}</div>)}
    </Section>
}

