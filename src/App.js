import React from "react";

class App extends React.Component {
  state = {
    rawData: [],
    playlist: [],
    totalResults: null,

    code: "PLuF8GDJO9aZLEdVIiCJQgkEeHSocIEy5r",
  }

  componentDidMount(){
    this.fetchPlaylist()
  }

  fetchPlaylist = () => {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${this.state.code}&key=${process.env.REACT_APP_API_KEY}`)
      .then(resp => resp.json())
      .then(data => this.setState({ 
        rawData: data, 
        totalResults: data.pageInfo.totalResults,
        playlist: [...this.state.playlist, data.items]
      }))
  }


  render() {
    // console.log(this.state.totalResults)
    console.log(this.state.playlist)
    return(
    <div>
      
    </div>
    )
  }
}
export default App;