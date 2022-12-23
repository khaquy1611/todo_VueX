class DateTime {
  getCurrentDate() {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    return cDay + "/" + cMonth + "/" + cYear;
  }
  getCurrentTime() {
    let currentDate = new Date();
    let time =
      currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds();
    return time;
  }

  getFullTimeAndDate() {
    return this.getCurrentTime() + " " + this.getCurrentDate();
  }
}

export default new DateTime();
