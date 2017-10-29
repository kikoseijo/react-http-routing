import React, {Component} from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props);
        if (this.state.posts.length === 0) {
            axios.get('/posts')
                .then(response => {
                    console.log('axios getPosts()');
                    const posts = response.data.slice(0,4);
                    const updatedPosts = posts.map( post => {
                        return {
                            ...post,
                            author: 'Max'
                        }
                    });
                    this.setState({posts:updatedPosts});
                }).catch( error => {
                    console.log(error);
                });
        }

    }

    postSelectedHandler = (id) => {
        this.props.history.push('/post/' + id);
    }

    render() {
        let posts = <p style={{textAlign:'center'}}>Sowmthign went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                        <Post  key={post.id}
                            title={post.title}
                            author={post.author}
                            click={ () => this.postSelectedHandler(post.id) }/>
                    // </Link>
                );
            });
        }
        return (
            <section className="Posts">
                { posts }
            </section>
        );
    }
}

export default Posts;
