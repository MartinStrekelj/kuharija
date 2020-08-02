import React, { Component } from 'react'
import "./List.css"
import { food } from  "../../container/sample"
import Item from "../Item/Item";



class List extends Component{
    render(){
        return(
            <div className="columns is-multiline b pa3" style={{textAlign: "center"}}>
                {food.map(fud => {
                    return (
                        <div key={fud.fid} className="column is-4">
                            <Item 
                            imeJedi={fud.imeJedi} 
                            tipJedi={fud.tipJedi}
                            fid    = {fud.fid}
                            />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default List;