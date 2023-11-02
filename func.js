window.onload = () => {
  displayTime();
  setInterval(() => {
    displayTime();
  }, 1000); // Update every second
};

const isDLS = (date) => {
  let lestDayOfMarch = new Date(date.getFullYear(), 3, 0);
  let lastDayOfOct = new Date(date.getFullYear(), 10, 0);
  
  let lastSundayOfMarch = lestDayOfMarch.getDate() - lestDayOfMarch.getDay();
  let lastSundayOfOct = lastDayOfOct.getDate() - lastDayOfOct.getDay();

  const start = new Date(date.getFullYear(), 2, lastSundayOfMarch - 2, 2);
  const end = new Date(date.getFullYear(), 9, lastSundayOfOct, 2);
  return date >= start && date < end;
};

const timeConverter = (date) => {
  const nowMS = date.getTime();
  const difMSFromUTC = date.getTimezoneOffset() * 60 * 1000;
  const DLS = isDLS(new Date());
  const dlsMS = DLS ? 10800000 : 7200000;
  let nowUTC = nowMS + difMSFromUTC + dlsMS;

  return new Date(nowUTC);
};

const displayTime = () => {
  const now = new Date();
  const convertedTime = timeConverter(now);
  document.getElementById("israel-display").innerHTML =
    timeFormetter(convertedTime);
  document.getElementById("local-display").innerHTML = timeFormetter(now);
};

const timeFormetter = (time) => {
  return time.toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
module.exports = { timeConverter, isDLS };
