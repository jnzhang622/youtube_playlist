import React from "react";

class App extends React.Component {

  state = {
    rawData: [],
    playlist: [],
    code: "",
  }

  fetchPlaylist = () =>{
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${this.state.code}&key=${process.env.REACT_APP_API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.setState({ rawData: data }))
  }


  render() {
    return(
      <div>hello</div>
    )
  }
}
export default App;