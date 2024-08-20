document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
  
    const adminPassword = '0';
  
    if (password === adminPassword) {
      document.cookie = "adminAuthenticated=true; path=/";
      window.location.href = 'adminPanel_redaction.html';
    } else {
      alert('Неверный пароль');
    }
  });