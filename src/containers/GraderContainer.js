import React, { Component } from 'react';
import TeamIDSelect from '../components/TeamIDSelect';
const {google} = require('googleapis');
const { initClient, readValue } = require('../client');

class GraderContainer extends Component {

  eventHandler(event) {
    google.load('client', initClient);
    debugger;
    readValue();
  }

  render() {
    return (
      <div className="graderForm">
        <form>

          <div>
            <label>
              Team ID:
              <TeamIDSelect />
            </label>
          </div>

          <div>
            <label>
              Packet Difficulty:
              <select>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Number of Correct Questions:
              <input type="number" min="0" max="3"/>
            </label>
          </div>

          <button onClick={this.eventHandler}>Submit Grades</button>

        </form>

      </div>
    )
  }
}

export default GraderContainer
