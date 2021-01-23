import { Link } from "react-router-dom";

export function NotificationPreview({ notification }) {
    return (
        <section>
            <Link to={`/profile/${notification.byUser._id}`}>{notification.byUser.fullname}</Link>
            <span>{notification.content}</span>
        </section>
    )
}
