document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Terima kasih, ' + name + '! Pesan Anda telah dikirim.';
    
    // Simulate form submission (you can replace this with actual server-side logic)
    setTimeout(function() {
        formMessage.textContent = '';
    }, 5000);
    
    // Mengosongkan formulir setelah dikirim
    document.getElementById('contactForm').reset();
});
