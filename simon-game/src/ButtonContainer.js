import React, { Component } from 'react';
import AudioButton from './Component/AudioButton.js';

class ButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonInfo = [{
      name: "red",
      color: "red",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
    },
    {
      name: "green",
      color: "green",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
    },
    {
      name: "yellow",
      color: "yellow",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
    },
    {
      name: "blue",
      color: "blue",
      audio: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
    }]
  }
  render() {
    return (
      <div className="btnContainer">
        <div className="level">{this.props.level}</div>
        <div className="btnLvl">
          <AudioButton info={this.buttonInfo[0]}/>
          <AudioButton info={this.buttonInfo[1]}/>
        </div>
        <div className="btnLvl">
          <AudioButton info={this.buttonInfo[2]}/>
          <AudioButton info={this.buttonInfo[3]}/>
        </div>
      </div>
    );
  }
}

export default ButtonContainer;