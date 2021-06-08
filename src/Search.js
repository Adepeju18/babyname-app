import React from "react";

export default function Search({ searchVal, setSearchVal }) {
    // const [searchVal, setSearchVal] = useState("");

    function handleChange(event) {
        setSearchVal(event.target.value);
        

    };
    return (
        <h1>
            <input type="text" placeholder="Type a name" value={searchVal}
                onChange={handleChange} />

            {/* <pre>filter:{searchVal}</pre> */}
        </h1>
    );
}