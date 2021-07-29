export function Section(props) {
    const {children, title} = props;

    return <div className="section">
        <button onClick={() => alert("hallo")}>klik</button>
        <h3>{title}</h3>
        {children}
    </div>;
}

