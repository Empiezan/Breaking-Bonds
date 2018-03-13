import React, { Component } from 'react'

const teams = [
  "TeamID1",
  "TeamID2",
  "TeamID3",
  "TeamID4",
  "TeamID5"
];

const MakeItem = function(X) {
  return <option>{X}</option>;
};

class TeamIDSelect extends Component {
  render(){
    return (
      <select>{teams.map(MakeItem)}</select>
    )
  }
}

export default TeamIDSelect
