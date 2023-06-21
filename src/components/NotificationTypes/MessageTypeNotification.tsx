import { NotificationType } from "../Notification";

export default function MessageTypeNotification({
  name,
  description,
  time,
  reference,
  unread,
}: NotificationType) {
  return (
    <div className="notification__content">
      <div className="notification__wrapper">
        <p>
          <a href="#" id="name">
            {name}
          </a>{" "}
          <span id="description">{description}</span>{" "}
          {unread ? (
            <img id="unread-icon" src="/red-circle-icon.svg" alt="unread"></img>
          ) : null}
        </p>
      </div>
      <span id="time">{time}</span>
      <a href="#">
        <div id="message">
          <span>{reference}</span>
        </div>
      </a>
    </div>
  );
}
