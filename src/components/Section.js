export function Section(props) {
    const {content, title} = props;

    return <div className="section">
        <h3>{title}</h3>
        {content}
    </div>;

}