import { NotificationType } from "../Notification";

export default function PictureTypeNotification({
  name,
  description,
  time,
  reference,
  unread,
  postUrl,
}: NotificationType) {
  return (
    <div className="notification__content">
      <div className="picture__container">
        <div className="notification__wrapper">
          <p>
            <a href="#" id="name">
              {name}
            </a>{" "}
            <span id="description">{description}</span>{" "}
            <a id="reference" href="#">
              {reference}
            </a>{" "}
            {unread ? (
              <img
                id="unread-icon"
                src="/red-circle-icon.svg"
                alt="unread"
              ></img>
            ) : null}
          </p>
          <span id="time">{time}</span>
        </div>
        {postUrl ? (
          <a href="#">
            <img src={postUrl} alt="postUrl" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
