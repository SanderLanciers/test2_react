import React from 'react';

export function Card(props) {
    const {children, title} = props;
    return (
        <div className="card">
            {title && <h4>{title}</h4>}
            {children}
        </div>
    );
}

