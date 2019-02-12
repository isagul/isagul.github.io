import React from 'react';

export default class TwitterTimeline extends React.Component {
    render(){
        return (
            <div className="twitter_timeline">
                <a className="twitter-timeline" 
                data-width="400" 
                data-height="600" 
                data-theme="light" 
                href="https://twitter.com/isamigul?ref_src=twsrc%5Etfw">Tweets by isamigul</a> 
            </div>
        )
    }
}