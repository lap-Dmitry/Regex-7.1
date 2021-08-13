export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const template1 = /[\w-]/.test(this.username);
    const template2 = /^[\d_-]|[\d_-]$/.test(this.username);
    const template3 = /\d{4}/.test(this.username);
    return template1 && !template2 && !template3;
  }
}
