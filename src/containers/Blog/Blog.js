import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

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
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-posts',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-posts" component={NewPost} />
                    <Route path="/post/:id" exact component={FullPost} />
                </Switch>


                {/* <FullPost id={this.state.selectedPostId}/>
                <NewPost /> */}
            </div>
        );
    }
}

export default Blog;
