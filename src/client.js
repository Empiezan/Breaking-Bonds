const {google} = require('googleapis');
const config = require('./config');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/sheets.googleapis.com-nodejs-quickstart.json
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var sheets = google.sheets('v4');

/**
*  Initializes the API client library and sets up sign-in state
*  listeners.
*/
// export function initClient() {
//   gapi.client.init({
//     apiKey: config.api_key,
//     discoveryDocs: DISCOVERY_DOCS,
//     clientId: config.clientId,
//     scope: config.scope
//   }).then();
//   console.log('inside initClient');
//   debugger;
// }

/**
* Append a pre element to the body containing the given message
* as its text node. Used to display the results of the API call.
*
* @param {string} message Text to be placed in pre element.
*/
export function readValue() {
  sheets.spreadsheets.values.get({
    key: config.api_key,
    spreadsheetId: config.spreadsheetId,
    range: '20Teams!A2:B'
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
}
