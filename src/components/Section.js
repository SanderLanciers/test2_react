export function Section(props) {
    const {children, title} = props;

    return <div className="section">
        <h3>{title}</h3>
        {children}
    </div>;
}

