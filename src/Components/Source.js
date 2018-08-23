import React from 'react';
import {
    urlBbcLogo,
    urlAbcLogo,
    urlBlooLogo,
    urlCnnLogo,
    urlDailyMailLogo
} from './External-imgs.js';
import { Link } from 'react-router-dom';

const newsSources = [
    {
        name: 'ABC',
        apiUrl:
            'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=8493fbd446fb4a688a372857c58b247a',
        logo: urlAbcLogo
    },
    {
        name: 'BBC',
        apiUrl:
            'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8493fbd446fb4a688a372857c58b247a',
        logo: urlBbcLogo
    },
    {
        name: 'Bloomberg',
        apiUrl:
            'https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=8493fbd446fb4a688a372857c58b247a',
        logo: urlBlooLogo
    },
    {
        name: 'CNN',
        apiUrl:
            'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=8493fbd446fb4a688a372857c58b247a',
        logo: urlCnnLogo
    },
    {
        name: 'Daily Mail',
        apiUrl:
            'https://newsapi.org/v2/top-headlines?sources=daily-mail&apiKey=8493fbd446fb4a688a372857c58b247a',
        logo: urlDailyMailLogo
    }
];

const Source = () => {
    return (
        <div>
            {newsSources.map((item, index) => {
                return (
                    <Link
                        to={{
                            pathname: '/News',
                            state: {
                                item
                            }
                        }}
                        key={index}
                    >
                        <img
                            alt='logo'
                            className={'NewsIcon'}
                            align={'center'}
                            src={item.logo}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default Source;
