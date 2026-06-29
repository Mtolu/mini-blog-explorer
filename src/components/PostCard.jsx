function PostCard({post}) {
    return (
        <div className="post-card">
            <strong>
                <span className="post-id">Post ID: {post.id}</span>
                <span className="user-id">User ID: {post.userId}</span>
            </strong>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default PostCard;

