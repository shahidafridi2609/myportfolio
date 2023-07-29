function toggleMenu() {
  var navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
}


// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const subheadingText = "A Web Developer";
  const typewriterElement = document.getElementById("typewriter");
  let charIndex = 0;

  function type() {
    if (charIndex < subheadingText.length) {
      typewriterElement.textContent += subheadingText.charAt(charIndex);
      charIndex++;
      setTimeout(type, 150); // Adjust the typing speed here
    }
  }

  type();
});

  // Load the Gmail API client
  function loadGmailApi() {
    gapi.client.load('gmail', 'v1', sendEmail);
  }

  // Function to send email using Gmail API
  function sendEmail() {
    var form = document.getElementById('contactForm');
    var data = new FormData(form);

    var emailData = {
      to: 'shahafridi2609@gmail.com',
      subject: 'New Contact Form Submission',
      message: 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nMessage: ' + data.get('message')
    };

    var message = 'Content-Type: text/plain; charset="UTF-8"\n' +
      'To: ' + emailData.to + '\n' +
      'Subject: ' + emailData.subject + '\n\n' +
      emailData.message;

    var base64EncodedMessage = btoa(message);
    var request = gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': base64EncodedMessage
      }
    });

    request.execute(function(response) {
      console.log(response);
      if (response.error) {
        alert('Error occurred while sending the email. Please try again later.');
      } else {
        alert('Message sent successfully!');
      }
    });
  }

  // Event listener for form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    loadGmailApi();
  });



