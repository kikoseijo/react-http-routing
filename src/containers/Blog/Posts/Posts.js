import React, {Component} from 'react';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
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
            }).catch( error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        let posts = <p style={{textAlign:'center'}}>Sowmthign went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                click={() => this.postSelectedHandler(post.id)}/>
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
