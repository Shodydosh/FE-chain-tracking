export function dateToTimestamp(dateStr: string): number {

  const date = Date.parse(dateStr);
  return date / 1000
}
export function timestampToDate(timestamp: number): [string, string] {

  const datetime = new Date(timestamp * 1000);
  // Hours part from the timestamp
  var hours = datetime.getHours();

  // Minutes part from the timestamp
  var minutes = "0" + datetime.getMinutes();

  // Seconds part from the timestamp
  var seconds = "0" + datetime.getSeconds();
  var date = "0" + datetime.getDate();
  var month = "0" + datetime.getMonth();
  var year = datetime.getFullYear();
  var formattedDatetime = year + '-' + month.slice(-2) + '-' + date.slice(-2) + 'T' + hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2) + 'Z';
  var formattedDate =     year + '-' + month.slice(-2) + '-' + date.slice(-2) + 'T00:00:00Z';
  return [formattedDatetime, formattedDate]
}