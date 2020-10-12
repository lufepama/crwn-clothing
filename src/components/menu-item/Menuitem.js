import React from 'react'
import "./menuitem.style.scss"
import { withRouter } from 'react-router-dom';

function Menuitem({ title, imageUrl, size, history, linkUrl, match}) {
    return(
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
            <div className="background-image"
                style={{
                backgroundImage: `url(${imageUrl})`
                }} >
            </div>
            <div className="content">
                <h1 className="title"> {title.toUpperCase()} </h1>
                <span className="subtitle"> Shop</span>
            </div>
            
        </div>

    )
}


export default withRouter(Menuitem);