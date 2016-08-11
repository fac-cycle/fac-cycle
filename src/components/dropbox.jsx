import React from 'react';
import Dropzone from 'react-dropzone';

class Dropbox extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  onDrop(file) {
    this.setState({
      files: this.state.files.concat(file),
    });
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={() => { this.onDrop(); }}>
          <div>Click here to access your Finder</div>
        </Dropzone>
        <p>These are the image previews</p>
        <div>
          {this.state.files.map((file, i) => <img
            alt="bla"
            style={{
              height: '100px',
              width: '100px',
              display: 'inline-block',
              margin: '5px',
            }}
            src={file.preview} key={i}
          />)}
        </div>
      </div>
    );
  }
}

export default Dropbox;
