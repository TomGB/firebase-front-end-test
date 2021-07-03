const fetch = require("node-fetch");

var key =
  "AAAAjfyiFQY:APA91bFg-NMgDeDA39bSgQ_z4TmBk0OG-_48_bS0B6ed3CYP9fj-UL6lsCKfANMwph_5f8rLIXFy7GRPOVy0hhw-xMmr55as5pfFLrV3OSC_DRJ1ODA8hPugGyCzhn5fsklDwl2VceSG";
var to =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNDMyMDRhMTc5MTVlOGJlN2NjZDdjYjI2NGRmNmVhMzgzYzQ5YWIiLCJ0eXAiOiJKV1QifQ.eyJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90b20tdGVzdC0yNDA2MTMiLCJhdWQiOiJ0b20tdGVzdC0yNDA2MTMiLCJhdXRoX3RpbWUiOjE2MjUzMzM4NTQsInVzZXJfaWQiOiIwa2dzQVRoampOTmZMQkMyYzMwZUJUNk5OdTIyIiwic3ViIjoiMGtnc0FUaGpqTk5mTEJDMmMzMGVCVDZOTnUyMiIsImlhdCI6MTYyNTMzMzg1NSwiZXhwIjoxNjI1MzM3NDU1LCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImFub255bW91cyJ9fQ.qLE1RyL0qTEL1NQrf5Z4X0vok8EpfLh9Y_mdMy81a_ZEOTPeQm0b-qaHWu2fknyycoBpdIWXpJV3dcDvfyuY8AmsHBI7w0Q0dvyHi2ZKAMUOWhzsqxFrxXjdlOcAfRtOufosxOJJhP39Cz1GpcQ87Z0QMJYchrT1DQtWtbGcf3Ykt6SVJHkqsGDxEsfE4HKM6E8XfGGzomANCXFQ6XW1wM2IHZe1sAXpz1PRDiZslcpRaBuvjGqEy9lte0d2kuNzqOmfJw9VYHJ7y8VNHFHpsbadr_8cJj3EYN9oSYTPJ6xqg0oeSKbDhefKToNKA59TLakTGN0QRL9JdYolGaEWGA";
var notification = {
  title: "Portugal vs. Denmark",
  body: "5 to 1",
  icon: "firebase-logo.png",
  click_action: "http://localhost:8081",
};

fetch("https://fcm.googleapis.com/fcm/send", {
  method: "POST",
  headers: {
    Authorization: "key=" + key,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    notification: notification,
    to: to,
  }),
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
