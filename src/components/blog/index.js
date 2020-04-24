import React from 'react';
import App from '../../App';
import BounceLoader from "react-spinners/BounceLoader";
import BlogContent from '../../shared/blogContent';
import { css } from "@emotion/core";
import {useFetch} from '../../hooks/useFetch';
import './style.scss';

const Blog = () => {
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    
    const {data, loading} = useFetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@isagul');

    return (
        <App>
            <BounceLoader
                size={50}
                color={"#CF5050"}
                loading={loading}
                css={override}
            />
            <div className="blog-component">
                {
                    data !== null && data.items.map((story, index) => {
                        const {title, link, content, thumbnail, categories} = story;
                        
                        return categories.length > 0 && (
                            <BlogContent 
                                title={title} 
                                link={link} 
                                thumbnail={thumbnail} 
                                content={content} 
                                categories={categories}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </App>
    )
}

export default Blog;
