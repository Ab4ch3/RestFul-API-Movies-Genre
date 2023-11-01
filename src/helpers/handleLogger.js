// Slack webhook
import { IncomingWebhook } from '@slack/webhook';
// Import config
import Config from '../config/index.js';

// Instanciamos un nuevo webhook
const webhook = new IncomingWebhook(`${Config.SLACK_WEBHOOK}`);

const loggerStream = {
  write: (message) => {
    webhook.send({
      text: message
    });
    // do anything - emit to websocket? send message somewhere? log to cloud?
  }
};

export default loggerStream;
