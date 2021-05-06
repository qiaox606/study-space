var active = document.getElementById('active');
function setCurrentlyActiveUsers(numberOfUsers) {
  active.innerText = numberOfUsers.toString();
}
setCurrentlyActiveUsers(1);
var pubnub = new PubNub({
    publishKey : 'pub-c-cb393bdd-d644-42d2-aa94-170bb2f1d9ff',
    subscribeKey : 'sub-c-bb75aa3e-ae54-11eb-8772-0a8f76eab11b',
    heartbeatInterval: 30
});
pubnub.addListener({
  presence: function(presenceEvent) {
    setCurrentlyActiveUsers(presenceEvent.occupancy);
  }
});
pubnub.subscribe({ 
  channels: ['myWebPage1'],
  withPresence: true
});