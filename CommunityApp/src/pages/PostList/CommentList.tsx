import React, { useEffect, useState } from 'react';
import "./CommentList.css";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentListProps {
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <div>
      <h3>Komentarze dla postu nr {postId}:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div className='commentContainer'>
            <strong>{comment.email}: </strong>{comment.name}
            <p>{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
