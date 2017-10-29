import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        users: [],
        selectedPostId: null,
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,6);
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts:updatedPosts});
            });
        axios.get('/users')
            .then(response => {
                this.setState({users:response.data})
            });
    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});

    }
    render () {
        const posts = this.state.posts.map( post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                click={() => this.postSelectedHandler(post.id)}/>
        })
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
                <section className="Posts">
                    { posts }
                </section>
                
            </div>
        );
    }
}

export default Blog;
