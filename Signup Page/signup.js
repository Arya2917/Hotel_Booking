// Event listener for signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
  const password = document.getElementById("password").value;

  // Validate password length
  if (password.length < 4) {
    event.preventDefault(); // Prevent form submission
    alert("Password should have at least 4 characters.");
  }
});

// Event listener for the login button click
document.getElementById("loginButton").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default action of the link

  // Switch to the login form
  document.getElementById("signupCard").innerHTML = `
    <h1 class="card-title">Log In</h1>
    <p class="card-subtitle">Don't have an account? <a href="#" id="signupButton">Sign up</a></p>
    <form class="signup-form" id="loginForm">
      <div class="form-row">
        <div class="form-group">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div class="form-group">
          <input type="password" id="loginPassword" name="password" placeholder="Password" required />
        </div>
      </div>
      <button type="submit" class="create-account-btn">Log In</button>
      <p><a href="#" id="forgotPasswordLink">Forgot Password?</a></p>
    </form>
  `;

  // Re-add the event listener for the signup button
  document.getElementById("signupButton").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default action

    // Switch back to the signup form
    document.getElementById("signupCard").innerHTML = `
      <h1 class="card-title">Create an account</h1>
      <p class="card-subtitle">Already have an account? <a href="#" id="loginButton">Log in</a></p>
      <form class="signup-form" id="signupForm">
        <div class="form-row">
          <div class="form-group">
            <input type="text" name="first-name" placeholder="First Name" required />
          </div>
          <div class="form-group">
            <input type="text" name="last-name" placeholder="Last Name" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div class="form-group">
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
        </div>
        <div class="checkbox-container">
          <div class="checkbox">
            <input type="checkbox" id="terms" required>
            <label for="terms">I agree to the terms and conditions</label>
          </div>
          <p>By signing up, you agree to our <a href="#">Privacy Policy</a>.</p>
        </div>
        <button type="submit" class="create-account-btn">Create Account</button>
      </form>
      <p class="or-register-with">or register with</p>
      <div class="social-buttons">
        <button class="google-btn">
          <img src="google.png" alt="Google" class="social-icon" /> Google
        </button>
        <button class="facebook-btn">
          <img src="facebook.png" alt="Facebook" class="social-icon" /> Facebook
        </button>
      </div>
    `;

    // Re-add the event listener for the login button
    document.getElementById("loginButton").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default action of the link
      // Switch to the login form
      document.getElementById("signupCard").innerHTML = `
        <h1 class="card-title">Log In</h1>
        <p class="card-subtitle">Don't have an account? <a href="#" id="signupButton">Sign up</a></p>
        <form class="signup-form" id="loginForm">
          <div class="form-row">
            <div class="form-group">
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <div class="form-group">
              <input type="password" id="loginPassword" name="password" placeholder="Password" required />
            </div>
          </div>
          <button type="submit" class="create-account-btn">Log In</button>
          <p><a href="#" id="forgotPasswordLink">Forgot Password?</a></p>
        </form>
      `;
    });
  });
});