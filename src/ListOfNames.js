import React from "react";
import BabyNames from "./BabyNames.json"
import NameList from "./NameList"



function ListOfNames({ searchVal, favourites, setFavourites }) {
    //  filter the list of all the names to remove the favourite.
    const filteredNames = BabyNames.filter((name) =>
        name.name.toLowerCase().includes(searchVal.toLowerCase()
        ))
        .filter(name => !favourites.includes(name))

    //  To add one name to favourite list
    function addFavourite(name) {
        setFavourites([...favourites, name])

    }

    return (
        < div>
            {/* < div className="row" ></div> */}
            <NameList lists={filteredNames} onItemClick={addFavourite} />
        </div>
    );
}
export default ListOfNames;
