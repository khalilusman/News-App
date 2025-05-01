import React from 'react'

export default function NewsItem(props) {
   
  return (
    <div>
        <div className="card" >
        <img src={props.image} className="card-img-top" alt="News item visual representation"/>
        <div className="card-body">
            <h5 className="card-title">{props.title} ...</h5>
            <p className="card-text">{props.description} ...</p>
            <a href={props.href} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>

          </div>
        </div>
  

    </div>
  )
}
