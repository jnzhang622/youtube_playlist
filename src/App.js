import React from "react";

class App extends React.Component {
  state = {
    rawData: [],
    playlist: [],
    totalResults: null,
    nextPageToken: "",
    code: "PLuF8GDJO9aZLEdVIiCJQgkEeHSocIEy5r",
  }

  componentDidMount(){
    this.fetchPlaylist()
  }

  fetchPlaylist = () => {
    // for (var i = 1; i < this.state.totalResults; i += 50){
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?&maxResults=50&pageToken=${this.state.nextPageToken}&playlistId=${this.state.code}&key=${process.env.REACT_APP_API_KEY}`)
        .then(resp => resp.json())
        .then(data => this.setState({ 
          rawData: data, 
          totalResults: data.pageInfo.totalResults,
          playlist: [...this.state.playlist, data.items]
      }))
    // }
  }


  render() {
    // console.log(this.state.totalResults)
    console.log(this.state.rawData)
    return(
      <div>
        hello
      </div>
    )
  }
}
export default App;