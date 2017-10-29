import React, { Component } from 'react';


import './Blog.css';
import Post from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {



    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-posts">New posts</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
                <FullPost id={this.state.selectedPostId}/>
                <NewPost />
            </div>
        );
    }
}

export default Blog;
