import React, { Component } from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/PauseCircleOutline';

class AudioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  onPlay = (event) => {
    this.setState({ playing: true });
  };
  onPause = (event) => {
    this.setState({ playing: false });
  };
  onEnded = (event) => {
    this.setState({ playing: false });
  };

  playAudio = () => {
    this.audioEl.play();
    const audio = this.audioEl;
    audio.addEventListener("play", this.onPlay);
    audio.addEventListener("pause", this.onPause);
  };

  pauseAudio = () => {
    this.audioEl.pause();
  };

  startAudio = () => {
    this.playAudio();
  };

  renderAudio = (prop) => {
    const { url } ='' || this.props;
    const { playing } = this.state;
    const notSupportedMsg =
      "Your browser does not support the <code>audio</code> element.";
    return (
      <>
        {!playing && (
          <PlayCircleOutlineIcon className="cursor-pointer" onClick={this.startAudio}/>
        )}
        {playing && <PauseIcon className="  cursor-pointer" onClick={this.pauseAudio}/>}

        <audio
          src={url}
          ref={(ref) => {
            this.audioEl = ref;
          }}
        >
          {notSupportedMsg}
        </audio>
      </>
    );
  };

  render() {
    return this.renderAudio();
  }
}

export default AudioButton;