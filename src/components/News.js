import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "New Atlas"
    },
    "author": "Joe Salas",
    "title": "Dark Matter: An 86-lb, 800-hp EV motor by Koenigsegg",
    "description": "There's no replacement for displacement. An adage that's been around as long as the combustion engine, really. But these age-old sayings don't really apply anymore when it comes to electric motors.Continue ReadingCategory: Automotive, TransportTags: Koenigseg…",
    "url": "https://newatlas.com/automotive/dark-matter-koenigsegg-ev-motor/",
    "urlToImage": "https://assets.newatlas.com/dims4/default/7a45c3e/2147483647/strip/true/crop/1810x950+0+185/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F03%2F92%2F851a92e945c3ae60b55ef5b8d1cb%2Fdm-web-2-ext-0.png&na.image_optimisation=0",
    "publishedAt": "2025-04-26T10:03:00Z",
    "content": "There's no replacement for displacement. An adage that's been around as long as the combustion engine, really. But these age-old sayings don't really apply anymore when it comes to electric motors.\r\n… [+4678 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Julian Chokkattu",
    "title": "Meta Ray-Bans Now Speak Your Language, Roku’s New Streaming Sticks, and Kia EVs Get Supercharged—Your Gear News of the Week",
    "description": "Plus: Duolingo now teaches chess, and it’s a big week for coffee.",
    "url": "https://www.wired.com/story/roku-meta-ray-bans-kia-evs-your-gear-news-of-the-week/",
    "urlToImage": "https://media.wired.com/photos/680c4d1c66ecfa702c6723e3/191:100/w_1280,c_limit/Roku's-Streaming-Sticks_042024_Lede.jpg",
    "publishedAt": "2025-04-26T10:00:00Z",
    "content": "Ive experienced Metas translation with text before and found it adequate for reading my childrens books in Spanish; Meta AI even offered, unprompted, some funny insights. When traveling, my coworker … [+3309 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": "NDTV News Desk",
    "title": "Musk's \"End Slaughter\" Post After Trump Says Russia, Ukraine \"Close To Deal\"",
    "description": "After US President Donald Trump claimed that Russia and Ukraine were &quot;very close to a deal,&quot; his billionaire adviser, Elon Musk, asserted it was time to end the war.",
    "url": "https://www.ndtv.com/world-news/elon-musks-time-to-end-slaughter-post-after-trump-says-russia-ukraine-very-close-to-deal-8259975",
    "urlToImage": "https://c.ndtvimg.com/2025-04/ultvadck_elon-musk_625x300_09_April_25.jpg",
    "publishedAt": "2025-04-26T09:36:51Z",
    "content": "After US President Donald Trump claimed that Russia and Ukraine were \"very close to a deal,\" his billionaire adviser, Elon Musk, asserted it was time to end the war. \"Time to end the slaughter,\" Musk… [+1878 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ETF Daily News"
    },
    "author": "MarketBeat News",
    "title": "Promising Industrial Stocks Worth Watching – April 24th",
    "description": "Tesla, Broadcom, Texas Instruments, Micron Technology, and Thermo Fisher Scientific are the five Industrial stocks to watch today, according to MarketBeat’s stock screener tool. Industrial stocks are shares of companies whose primary business involves produci…",
    "url": "https://www.etfdailynews.com/2025/04/26/promising-industrial-stocks-worth-watching-april-24th/",
    "urlToImage": "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
    "publishedAt": "2025-04-26T09:32:46Z",
    "content": "Tesla, Broadcom, Texas Instruments, Micron Technology, and Thermo Fisher Scientific are the five Industrial stocks to watch today, according to MarketBeat’s stock screener tool. Industrial stocks are… [+6560 chars]"
    },
    {
    "source": {
      "id": null,
      "name": "Rander.com"
      },
      "author": "pragcap.com",
      "title": "An Autopsy of American Exceptionalism",
      "description": "Gerber, an early \nTesla investor, told BI previously that it doesn't matter if Musk returns to Tesla, and that a lot of brand damage had already been done",
      "url": "https://biztoc.com/x/a7d460766c81f236",
      "urlToImage": "https://biztoc.com/cdn/930/og.png",
      "publishedAt": "2025-04-26T08:20:18Z",
      "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Tesla stock surging today? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How are Trump's tariffs impacting US bu… [+956 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Biztoc.com"
      },
      "author": "ft.com",
      "title": "How The Treasury Market Got Hooked On Hedge Fund Leverage",
      "description": "Veritaco CEO Jeffrey Bowie faces charges for allegedly installing malware on hospital computers, violating Oklahoma’s Computer Crimes Act. Jeffrey Bowie, CEO of the cybersecurity firm Veritaco, is facing two counts of violating Oklahoma’s Computer Crimes Act",
      "url": "https://biztoc.com/x/24efcb3e2ab34cbe",
      "urlToImage": "https://biztoc.com/cdn/930/og.png",
      "publishedAt": "2025-04-26T08:20:11Z",
      "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Tesla stock surging today? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How are Trump's tariffs impacting US bu… [+1120 chars]"
      }
  ]

  constructor(){
    super();
    this.state ={
      articles : [],
      loading : false,
      page : 1
    }
  }
  

  async componentDidMount(){
    this.setState({ loading: true }); 


    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=df033abef29c46a3a916e666817f5288&page=1"
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({articles: parseData.articles, loading:false})

  }

  previousbtn = async () =>{
    console.log("clicked")
    this.setState({ loading: true }); 


    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=df033abef29c46a3a916e666817f5288&page=${this.state.page - 1}`
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({articles: parseData.articles, loading:false, page: this.state.page - 1 })

  }
  nextbtn = async () =>{
    console.log("clicked")
    this.setState({ loading: true }); 


    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=df033abef29c46a3a916e666817f5288&page=${this.state.page + 1}`
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({articles: parseData.articles, loading:false, page: this.state.page + 1 })

  }
  render() {
    return (
      <div>
        <div className="conatiner my-3">
        <h4>Get you daily updated news here</h4>
        </div>
        <div className="container my-3">
          
            {this.state.loading && (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
          <div className="row">
          {this.state.articles.map((element, index) => {
            return (
              <div className="col-md-4 my-3" key={index}>
                <NewsItem
                  title={
                    element.title && element.title.length >= 35
                      ? element.title.slice(0, 35)
                      : element.title
                  }
                  image={element.urlToImage}
                  description={
                    element.description && element.description.length >= 80
                      ? element.description.slice(0, 80)
                      : element.description
                  }
                  href={element.url}
                />
              </div>
              );
            })}
          </div>
        </div>

          <div className="conatiner  d-flex justify-content-around">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousbtn}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.nextbtn} >Next &rarr; </button>
        </div>

      </div>
    );
  }
}
