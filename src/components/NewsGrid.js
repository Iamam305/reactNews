import React, { Component } from "react";
import NewsCard from "./NewsCard";

export class NewsGrid extends Component {
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log('cmd')
    let url = process.env.REACT_APP_NEWS_API_URL; ;
    let data = await fetch(url);
    let ParsedData = await data.json();
    console.log(ParsedData);
    this.setState({articles: ParsedData.articles});
  }
  render() {
    return (
      <>
        <div className="container mt-5 mx-auto">
           <div className="row  justify-content-between">
          {this.state.articles?.map((element) => {
              return (
                <div className="col-md-4 col-sm-1  my-2" key={element.url}>
                  <NewsCard
                    title={element.title}
                    description={element.description?element.description.slice(0, 70):"NO DESCRIPTION"}
                    imgurl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div> 
        </div>
      </>
    );
  }
}

export default NewsGrid;
