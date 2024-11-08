// |-----| Scroll Effect function |-----| //
function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
        navbar.classList.add('background-black');
      } else {
        navbar.classList.remove('background-black');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);
// |-----| Scroll Effect function |-----| //

// |-----| SweetAlert2 "Contact" alert |-----| //
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  Swal.fire({
    title: "Message sent!",
    text: "Your message will be delivered to Abril",
    icon: "success",
    confirmButtonColor: '#6C2AD9',
    confirmButtonText: 'Close'
  }).then((result) => {
    if (result.isConfirmed) {
      this.submit();
    }
  });
});
// |-----| SweetAlert2 "Contact" alert |-----| //

document.querySelectorAll('.btnClose').forEach(function (button) {
  button.addEventListener('click', function () {

    var modal = button.closest('.modal');
    var bootstrapModal = bootstrap.Modal.getInstance(modal);
    
    if (bootstrapModal) {
      bootstrapModal.hide();
    }

    window.location.href = '#contact';
  });
});