import { Avatar } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';

export function CommentPreview({ comment }) {
    return (
        <div className="comment-preview flex col">

            <div className="comment-author flex space-between align-center">
                <div className="flex">
                    <Avatar
                        className="author-img"
                        src={comment.by.imgUrl}
                        alt="avatar"
                    />
                    <h4 className="author-name">{comment.by.fullname}</h4>
                </div>
                <div>
                    <span className="comment-time ">{new Date(comment.createdAt).toLocaleTimeString()}</span>
                </div>
            </div>

            <span className="comment-text">{comment.text}</span>
            <div className="btn-comment-bottom flex">
                <button className="flex center align-center"><ThumbUpAltOutlinedIcon />Like</button>
                <button className="flex center align-center"><ReplyIcon />Reply</button>
            </div>
        </div>
    )
}
