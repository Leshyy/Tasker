import { Avatar } from '@material-ui/core';

export function CommentPreview({ comment }) {
    return (
        <div className="comment-preview flex col">

            <div className="comment-author flex align-center">
                <Avatar
                    className="author-img"
                    src={comment.by.imgUrl}
                    alt="avatar"
                />
                <span className="author-name">{comment.by.fullname}</span>
            </div>

            <span className="comment-time">{new Date(comment.createdAt).toLocaleTimeString()}</span>
            <span className="comment-text">{comment.text}</span>
        </div>
    )
}
