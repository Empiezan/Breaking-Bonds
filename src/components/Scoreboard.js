import React from 'react';
import '../Scoreboard.css';
import ReactGoogleSheetConnector from "react-google-sheet-connector"
import { connectToSpreadsheet } from "react-google-sheet-connector";
import { GoogleTable } from "react-google-sheet-connector";

const API_KEY = 'AIzaSyCAwxMAHCezEbVndZl3-JPe-vsKn3jM0pA';
const CLIENT_ID = '266547601449-a86le41arqjfaeu8r3qbvicbmb1npcco.apps.googleusercontent.com';
const SPREADSHEET_ID = '1DTjxWQt0YgTUfjDNUPQGRWNxT9f8Q6R6hWv0_YOmOQM';

class Scoreboard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          time: new Date().toLocaleString().split(",")[1]
      };

  }

  componentDidMount() {
      this.intervalID = setInterval(
          () => this.tick(),
          1000
      );
  }

  componentWillUnmount() {
      clearInterval(this.intervalID);
  }

  tick() {
      this.setState({
          time: new Date().toLocaleString().split(",")[1],
      });
  }
    render() {
        return (
            <div className="Scoreboard">
                <p className="App-clock">
                    {this.state.time}
                </p>
                <ReactGoogleSheetConnector clientid={CLIENT_ID}
                                           apiKey={API_KEY}
                                           spreadsheetId={SPREADSHEET_ID}
                                           spinner={ <div className="loading-spinner"/> }>
                    <GoogleTable sheetName="Sorted Teams" />
                </ReactGoogleSheetConnector>
            </div>

        )
    }
}

export default connectToSpreadsheet(Scoreboard);
