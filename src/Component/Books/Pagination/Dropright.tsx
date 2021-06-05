import React from "react";

const Dropright: React.FC<any> = (props) =>{
    return <div className="btn-group dropright">
        <button type="button" className="btn btn-secondary">
            {`${props.name} : х`}
        </button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                aria-expanded="false">
            <span className="sr-only">Toggle Dropright</span>
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">отключить</a></li>
            <li><a className="dropdown-item" href="/">по возрастанию</a></li>
            <li><a className="dropdown-item" href="/">по убыванию</a></li>
        </ul>
    </div>
}

export default Dropright;