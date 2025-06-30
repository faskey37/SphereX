document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message"]').value;

  db.collection("messages").add({
    name: name,
    email: email,
    subject: subject,
    message: message,
    timestamp: new Date()
  })
  .then(() => {
    alert("Message sent successfully!");
    document.querySelector('.contact-form').reset();
  })
  .catch((error) => {
    alert("Error sending message: " + error.message);
  });
});
