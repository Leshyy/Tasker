import { CommentPreview } from "./CommentPreview";

export function CommentList({ comments }) {
    return (
        <div className="comment-list">
            {comments.map((comment, idx) => {
                return <CommentPreview key={idx} comment={comment} />
            })}

        </div>
    )
}
