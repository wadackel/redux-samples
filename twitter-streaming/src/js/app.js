import React, {Component} from "react"
import ReactDOM from "react-dom"

const socket = window.socket;

socket.on("tweet", (tweet) => {
  console.log(tweet);
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }
  
  componentDidMount() {
    socket.on("tweet", ::this.handleTweet);
  }
  
  handleTweet(tweet) {
    const {tweets} = this.state;
    tweets.push(tweet);
    this.setState({tweets});
  }
  
  render() {
    const {tweets} = this.state;
    const list = tweets.map((tweet, i) => {
      return (
        <li key={i}>
          <p><img src={tweet.user.profile_image_url} />　{tweet.user.screen_name}　{tweet.create_at}</p>
          <h3>{tweet.text}</h3>
        </li>
      );
    });
    
    return (
      <div>
        <h1>Tweets</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);