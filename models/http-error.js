class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
    console.log(`ERROR: ${message} ${errorCode}`);
  }
}

module.exports = HttpError;
