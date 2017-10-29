import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
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
                            &nbsp;|&nbsp;
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: 'new-posts',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New posts</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-posts" exact component={NewPost} />
                {/* <Route path="/post" exact component={FullPost} /> */}


                {/* <FullPost id={this.state.selectedPostId}/>
                <NewPost /> */}
            </div>
        );
    }
}

export default Blog;
