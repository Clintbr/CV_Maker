import React from 'react';
import iconsData from '../../assets/mdi-icons.json';

export default function Icon({ name, color = "currentColor", size = 24, className = "" }) {
    // Suche das Icon in der JSON anhand des Namens
    const icon = iconsData.find(i => i.name === name);

    if (!icon) {
        console.warn(`Icon "${name}" nicht in mdi-icons.json gefunden.`);
        return null;
    }

    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
            className={className}
        >
            <path d={icon.path} />
        </svg>
    );
}