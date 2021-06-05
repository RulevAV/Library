import React from "react";
import ListBooks from "./ListBooks/ListBooks";
import Pagination from "./Pagination/Pagination";

function WallBooks() {//d-flex justify-content-center

    return <div>
        <Pagination/>
        <ListBooks/>
    </div>

}

export default WallBooks