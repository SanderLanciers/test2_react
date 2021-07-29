import {Section} from "./Section";

export function EventDemo() {
    return <Section title="events">
        <div style={{backgroundColor: "pink"}}>
            <a href="http://google.com"
                onClick={(e) => {
                    e.preventDefault();
                    alert("link is clicked");
                }}>dit is een link met een href</a>
        </div>
    </Section>;
}