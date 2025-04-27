import React from 'react'

export default function NewsItem(props) {
   
  return (
    <div>
        <div className="card" style={{width: "16rem"}}>
        <img src={props.image} className="card-img-top" alt="https://images6.alphacoders.com/337/337780.jpg"/>
        <div className="card-body">
            <h5 className="card-title">{props.title} ...</h5>
            <p className="card-text">{props.description} ...</p>
            <a href={props.href} target='blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
  

    </div>
  )
}
