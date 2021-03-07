import React from 'react'

class Api extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=javascript&format=json&origin=*"

    fetch(url)
    .then((result) => result.json())
    .then((result) => {
      this.setState({
        data: result,
      })
    })
  }


  render() {

    /* const topicData = this.state.data[1]
    const linksData = this.state.data[3]
    console.log("Type of topicData:" + typeof(topicData))
    console.log("Type of linksData: " + typeof(linksData))
    let result = ''
    topicData.forEach((entry, index) => {
      result += `<li key=${index}>${entry} - ${linksData[index]}</li>`
    }) */
    
    const filteredData = [this.state.data[1], this.state.data[3]]
    console.log("From render Data: " + typeof(filteredData))
    const result = filteredData.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default Api;