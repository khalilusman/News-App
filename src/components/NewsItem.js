// import React from 'react'

// export default function NewsItem() {
//   return (
//     <div>

//     </div>
//   )
// }

import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    return (
      <div>
                 <div class="card" style={{width: "18rem;"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" class="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

