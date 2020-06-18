import React, { Component } from 'react';
import PostData from '../src/Data/datas.json'

class Post extends Component {
    render() {
        return (
            <div>
                {PostData.map((postDetail, index) => {
                    return <div>
                        <h1>{postDetail.age}</h1>
                <p>{postDetail.name}</p>
                        </div>
                })}
            </div>
        );
    }
}

export default Post;