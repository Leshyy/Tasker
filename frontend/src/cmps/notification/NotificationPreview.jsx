import { Link } from "react-router-dom";

export function NotificationPreview({ notification }) {
    return (
        <section className="noti-preview">
            <Link className="noti-author" to={`/profile/${notification.byUser._id}`}>{notification.byUser.fullname}</Link>
            <span className="noti-content">{notification.content}</span>
        </section>
    )
}
