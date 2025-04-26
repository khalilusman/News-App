import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <div>
          <div className="container my-3" >
            <h4>Get you daily updated news here</h4>
            <div className="col-md-4">
            <NewsItem/>

            </div>
          </div>
      </div>
    )
  }
}
