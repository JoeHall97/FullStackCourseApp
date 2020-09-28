const sendGrind = require('sendgrid');
const helper = sendGrind.mail;
const keys = require('../config/keys');
const recipientSchema = require('../models/Recipients');

class Mailer extends helper.Mail {
  //this.from_email = new helper.Email(<Sender>); <-- use this instead of code from the lecture
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendGrind(keys.sendGridKey);
    this.from_email = new helper.Email('josephdahall@hotmail.co.nz');
    this.subject = subject;
    this.body = new helper.Content('text/html',content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email)
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;