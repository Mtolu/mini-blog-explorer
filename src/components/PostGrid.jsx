import PostCard from "./PostCard";

function PostGrid({posts}) {
    if (posts.length === 0) {
        return <h2 className="empty-posts">Empty! No posts found</h2>;
    }

    return (
        <div className="post-grid">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostGrid;

