import React, { Component } from "react";
import axios from "axios";
import Header from "../Header/Header.js";
import { Loading } from '../Loading/Loading.js';
import {
    urlArrowUpImg,
    urlRefreshImg
} from "../External-imgs/External-imgs.js";


const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f77c754a4f3743afb33f2579bf3c7cbf';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: false,
            error: null
        }

        this.handleRefresh = this.handleRefresh.bind(this);
        this.fetchBbcData = this.fetchBbcData.bind(this);
    }

    handleRefresh() {
        this.fetchBbcData();
    }

    fetchBbcData() {
        this.setState({ isLoading: true });
        axios(url)
            .then(data => this.setState({ articles: data.data.articles || [], isLoading: false, error: null }))
            .catch(error => this.setState({ error, isLoading: false }))

    }

    componentDidMount() {
        this.fetchBbcData();

    }

    render() {
        const { articles, isLoading, error } = this.state;


        return (
            <div className="App">
                <Header src={ urlRefreshImg } onClick={ this.handleRefresh } >
                    Top headlines from BBC News
                </Header>
                {isLoading
                    ? <Loading className="IconStyle" />
                    : error
                        ? <div>
                            <h3>Oosp. We have a problem!</h3>
                            { console.log(error.message) }
                        </div>
                        : articles.map((article, index) => {
                            return (
                                <div key={ index } className="Article">
                                    <a href={ article.url } target="_blank"><h3>{ article.title }</h3></a>
                                    <p className="ArticleText">{ article.description }</p>
                                    <img alt={article.title} src={article.urlToImage} className="ArticleImg" />
                                </div>
                            );
                        })}
                <a href="#header">
                    <img alt="up" src={ urlArrowUpImg } className="IconStyle" />
                </a>
            </div>
        );
    }
}

export default App;