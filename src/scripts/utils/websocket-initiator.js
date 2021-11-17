import CONFIG from '../globals/config';
import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${restaurant.name} has been added!`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMG_SM_URL}/${restaurant.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
