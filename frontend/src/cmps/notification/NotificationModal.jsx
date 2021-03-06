import { Component } from "react";
import { NotificationList } from "./NotificationList";

export class NotificationModal extends Component {


    render() {
        const { notifications } = this.props
        return (
            <section className="noti-modal">
                <span className="noti-header">notifications:</span>
                <NotificationList notifications={notifications} />
            </section>
        )
    }
}
