import React, {useState, useEffect} from 'react';
import App from '../../App';
import './style.scss';

const Blog = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isagul')
            .then(function (res) { return res.json(); })
            .then(function (response) {
                if (response.status === "ok") {
                    setStories(response.items);
                }
            })
    }, []);

    return (
        <App>
            <div className="blog-component">
                {
                    stories.map((story, index) => {
                        const {title, link, content, thumbnail, categories} = story;
                        let createdDiv = document.createElement('div');
                        createdDiv.innerHTML = content;
                        return (
                            <div key={index} className="story-area">
                                {!thumbnail.includes('stat') && <img className="thumbnail" src={thumbnail} alt={categories.join(' ')}/>}
                                <div className="desc-area">
                                    <p className="title">{title}</p> 
                                    <p className="content">{createdDiv.getElementsByTagName('p')[0].innerText}...</p>         
                                    <a className="show-more" href={link} target="_blank" rel="noopener noreferrer">
                                        <p>More</p>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </App>
    )
}

export default Blog;
