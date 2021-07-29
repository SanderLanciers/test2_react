export function Section(props) {
    const {children, title} = props;

    return <div className="section">
        <button
            onClick={(e) => alert(`hallo (${e.clientX}, ${e.clientY})`)}>
            klik
        </button>
        <h3>{title}</h3>
        {children}
    </div>;
}

