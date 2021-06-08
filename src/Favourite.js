import React from 'react';
import NameList from "./NameList"

export default function Favourite({ favourites, setFavourites }) {

    function removeFromFavourite(name) {
        setFavourites(favourites.filter((el) => el !== name));
    }

    return (
        <div className="Add-favourite">
            {/* <ul>{favourite.map((name, index)=>
                <li key={index}>{name.name}</li>)}
                </ul> */}
            <NameList lists={favourites} onItemClick={removeFromFavourite} />

        </div>
    )
}