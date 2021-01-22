import { NotificationList } from "./NotificationList";

export function NotificationModal({ notifications }) {
    return (
        <section className="noti-modal">
            <span>notifications:</span>
            <NotificationList notifications={notifications} />
        </section>
    )
}
