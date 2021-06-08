import React from 'react';

export default function NameList({ lists, onItemClick }) {
    return (
        // <div className="row">
        <ul>
            {lists.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                return 1
            }).map((name) => (
                <li className={name.sex} key={name.id}>
                    <button onClick={() => onItemClick(name)} >
                        {name.name}</button>
                </li>

            )
            )}
        </ul>
        // </div>
    )

}