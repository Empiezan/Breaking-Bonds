import React, { Component } from 'react'
import TeamIDSelect from '../components/TeamIDSelect'

class GraderContainer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="graderForm">
        <form>

          <div>
            <label>
              Team ID:
              <TeamIDSelect/>
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

          <button>Submit Grades</button>

        </form>
      </div>
    )
  }
}

export default GraderContainer
