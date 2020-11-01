import React from "react";

class App extends React.Component {
  state = {
    rawData: [],
    playlist: [],
    code: "PLuF8GDJO9aZLEdVIiCJQgkEeHSocIEy5r",
  }

  componentDidMount(){
    this.fetchPlaylist()
  }

  fetchPlaylist = (e) => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${this.state.code}&key=${process.env.REACT_APP_API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.setState({ rawData: data }))
  }


  render() {
    console.log(this.state.rawData)
    return(
    <div>
      
    </div>
    )
  }
}
export default App;