import LinkTypeNotification from "./NotificationTypes/LinkTypeNotification";
import MessageTypeNotification from "./NotificationTypes/MessageTypeNotification";
import PictureTypeNotification from "./NotificationTypes/PictureTypeNotification";
export interface NotificationType {
  key?: string;
  pictureUrl?: string;
  name: string;
  description: string;
  time: string;
  reference: string;
  type?: string;
  unread?: boolean;
  postUrl?: string;
}

export function Notification({
  pictureUrl,
  name,
  description,
  time,
  reference,
  type,
  unread,
  key,
  postUrl,
}: NotificationType) {
  return (
    <div key={key} className={unread ? "notification unread" : "notification"}>
      <div className="profileImg">
        <a href="#">
          <img src={pictureUrl} alt={name} />
        </a>
      </div>
      {type === "message" ? (
        <MessageTypeNotification
          name={name}
          description={description}
          reference={reference}
          unread={unread}
          time={time}
        />
      ) : type === "link" ? (
        <LinkTypeNotification
          name={name}
          description={description}
          reference={reference}
          unread={unread}
          time={time}
          postUrl={postUrl}
          type={type}
        />
      ) : type === "picture" ? (
        <PictureTypeNotification
          name={name}
          description={description}
          reference={reference}
          unread={unread}
          time={time}
          postUrl={postUrl}
        />
      ) : null}
    </div>
  );
}
