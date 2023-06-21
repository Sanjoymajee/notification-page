import { useState } from "react";
import { Notification, NotificationType } from "./Notification";
import { NotificationData } from "../data/NotificationData";
export default function NotificationPage() {
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => {
        notification.unread = false;
        return notification;
      })
    );
    setNumOfNotifications(0);
  };

  const unreadNotifications = NotificationData.filter(
    (notification) => notification.unread === true
  ).length;
  const [notifications, setNotifications] =
    useState<NotificationType[]>(NotificationData);
  const [numOfNotifications, setNumOfNotifications] =
    useState(unreadNotifications);
  return (
    <div className="notification__card">
      <div className="card__header">
        <h2>
          Notifications{" "}
          {numOfNotifications ? <span>{numOfNotifications}</span> : null}
        </h2>
        <button onClick={() => markAllAsRead()}>Mark all as read</button>
      </div>
      <div className="notification__container">
        {notifications.map((notification) => (
          <Notification
            key={notification.key}
            name={notification.name}
            pictureUrl={notification.pictureUrl}
            description={notification.description}
            reference={notification.reference}
            type={notification.type}
            unread={notification.unread}
            time={notification.time}
            postUrl={notification.postUrl}
          />
        ))}
      </div>
    </div>
  );
}
