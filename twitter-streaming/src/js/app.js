const socket = window.socket;

socket.on("tweet", (tweet) => {
  console.log(tweet);
});