<script>
  document.querySelector('.search-button').addEventListener('click', function() {
    const checkInDate = document.getElementById('check-in').value;
    const stayingFor = document.getElementById('staying-for').value;
    const rooms = document.getElementById('rooms').value;
    const adults = document.getElementById('adults').value;
    const voucher = document.getElementById('voucher').value;

    // Alert user
    alert("Search initiated!");

    // Show room cards with fade-up animation regardless of input
    const roomCards = document.querySelectorAll('.room-card');
    roomCards.forEach((card, index) => {
      card.classList.add('fade-up');
      card.style.display = 'flex'; // Show the card
      card.style.opacity = 1; // Set opacity to 1 for the fade effect
    });

    // Check if all fields are filled before continuing
    if (!checkInDate || !stayingFor || !rooms || !adults) {
      alert("Please fill in all required fields."); // Alert if any field is missing
    }
  });
</script>
