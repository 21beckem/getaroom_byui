async function requestData() {
  const url = 'https://ems.byui.edu/EmsWebApp/AnonymousServersApi.aspx/CustomBrowseEvents';
  
  const data = `{
    "date": "2025-02-12 10:19:01",
    "data": {
      "BuildingId": -1,
      "GroupTypeId": -1,
      "GroupId": -1,
      "EventTypeId": -1,
      "RoomId": 266,
      "StatusId": -1,
      "ZeroDisplayOnWeb": 1,
      "HeaderUrl": "",
      "Title": "",
      "Format": 0,
      "Rollup": 0,
      "PageSize": 50,
      "DropEventsInPast": true,
      "EncryptD": "https://ems.byui.edu/EmsWebApp/CustomBrowseEvents.aspx?data=pHyRMYWznZ%2fIIIZVBuuTDD6ymecJd3sECUMn95fcW76%2bXhc6BjtoTHiBwxhR%2bFL5g%2fiNtY1ZfT9uqz8O8%2fZ195DoCY1X8%2bob"
    }
  }`;
  
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: data,
  });
  
  const text = await response.text();
  
  console.log(text);
}
requestData();
