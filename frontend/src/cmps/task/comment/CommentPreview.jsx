import { Avatar } from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

export function CommentPreview({ comment }) {
    return (
        <div className="comment-preview flex col">

            <div className="comment-author flex space-between align-center">
                <div className="flex align-center">
                    <Avatar
                        className="author-img"
                        src={comment.by.imgUrl}
                        alt="avatar"
                    />
                    <h4 className="author-name">{comment.by.fullname}</h4>
                </div>
                <div>
                    <span className="comment-time flex align-center ">{new Date(comment.createdAt).toLocaleTimeString()}</span>
                </div>
            </div>
            <span className="comment-text">{comment.text}</span>
            {comment.imgUrl && <img className="uploaded-img" src={comment.imgUrl} alt="content" />}
            <div className="btn-comment-bottom flex">
                <span className="btn flex center align-center"><ThumbUpAltOutlinedIcon />Like</span>
                <span className="btn flex center align-center"><ReplyIcon />Reply</span>
            </div>
        </div>
    )
}
