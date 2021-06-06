import React, {useState} from "react";
interface iDrop {
    name:string,
    SortBooksSaga: (sort:number)=>void,
}
const Dropright: React.FC<iDrop> = (props) =>{

    let [state,setState] = useState("По автору");
    let sort = (nume:string,sort:number) =>{
        setState(nume);
        props.SortBooksSaga(sort);
    }
    return <div className="btn-group dropright">
        <button type="button" className="btn btn-secondary">
            {`${props.name} : ${state}`}
        </button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
                aria-expanded="false">
            <span className="sr-only">Toggle Dropright</span>
        </button>
        <ul className="dropdown-menu">
            <li><span className="dropdown-item" onClick={()=>sort("По автору",0)}>По автору</span></li>
            <li><span className="dropdown-item" onClick={()=>sort("По названию",1)}>По названию</span></li>
            <li><span className="dropdown-item" onClick={()=>sort("По рейтингу",2)}>По рейтингу</span></li>
        </ul>
    </div>
}

export default Dropright;