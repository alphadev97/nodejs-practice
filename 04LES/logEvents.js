const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const datetime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${datetime}\t${uuid()}\t${message}`;
  console.log(logItem);

  try {
    await fsPromises.appendFile(
      path.koin(__dirname, "logs", "eventlog.txt"),
      logItem
    );
  } catch (error) {
    console.err(error);
  }
};

module.exports = logEvents;
