
export function CommentPreview({ comment }) {
    return (
        <div className="comment-preview flex col">
            {/* user avatar here */}
            <span className="comment-author">{comment.by.fullname}</span>
            <span className="comment-time">{new Date(comment.createdAt).toLocaleTimeString()}</span>
            <span className="comment-text">{comment.text}</span>
        </div>
    )
}
