import React, { useContext, useEffect, useState } from 'react';
import CommentList from "./CommentList";
import "./PostList.css";
import { userContext } from '../../components/AuthRequired';
import { Post } from '../../types';

const PostList: React.FC = () => {
  const User = useContext(userContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleComments, setVisibleComments] = useState<{ [postId: number]: boolean }>({});

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${User?.id}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleShowCommentsClick = (postId: number) => {
    setVisibleComments(prevState => ({
      ...prevState,
      [postId]: !prevState[postId]
    }));
  };

  return (
    <div className="postsContainer">
      <h2>Posts list</h2>
      <ul>
        {posts.map((post) => (
          <div className='singlePostContainer' key={post.id}>
            <li>
              <h1>{post.id}</h1>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button className = 'showButton' onClick={() => handleShowCommentsClick(post.id)}>
                {visibleComments[post.id] ? 'Hide comments' : 'Show comments'}
              </button>
              {visibleComments[post.id] && <CommentList postId={post.id} />}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
