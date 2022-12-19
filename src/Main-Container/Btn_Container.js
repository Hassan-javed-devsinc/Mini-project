import React from 'react'
import { useState,useEffect } from 'react'
import "./Btn_Container.css"

export default function Btn_Container(props) {
    
    const [disable, setDisable] = useState(props.type.length)

    useEffect(() => {
        
        props.type.length === 0 ? setDisable(true) : setDisable(false);
        
    }, [props.type.length])
    


    const lessHandler = () => {
        props.lessHandler(props.name)
    }

    const moreHandler = () => {
        props.moreHandler(props.name)
    }
    
  
    return (
      <div>
        <table className="tab">
          <tbody>
            <tr>
              <th className="wid">
                <span className="name">{props.name}</span>
              </th>
              <th>
                <button
                  disabled={disable}
                  className={disable ? "disable" : "less"}
                  onClick={lessHandler}
                >
                  Less
                </button>
              </th>
              <th>
                <button className="more" onClick={moreHandler}  >
                  More
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
