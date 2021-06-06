import React from "react";
import Navigation from "./Pagination/Navigation/Navigation";
import Pagination from "./Pagination/Pagination";

const HomePageHead = () => {
    return <nav aria-label="Page navigation example">
        <Navigation/>
        <Pagination/>
    </nav>
}

export default HomePageHead;