document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      alert("Thanks for contacting me, " + name + "!");
    } else {
      alert("Please fill in all fields.");
    }
  });document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      alert("Thanks for contacting me, " + name + "!");
    } else {
      alert("Please fill in all fields.");
    }
  });
