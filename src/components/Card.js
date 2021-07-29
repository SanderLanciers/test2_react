import React from 'react';

export function Card(props) {
    const {children, title, extraClassName} = props;
    return (
        <div className={`card ${extraClassName}`}>
            {title && <h4>{title}</h4>}
            {children}
        </div>
    );
}

