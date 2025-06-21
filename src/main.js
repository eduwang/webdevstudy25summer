import Swal from 'sweetalert2';

document.getElementById('warningButton').addEventListener('click', () => {
  Swal.fire({
    title: 'Warning!',
    text: 'I Said Do Not Click This Button',
    icon: 'warning',
    confirmButtonText: 'Okay...',
    background: '#1b263b',
    color: '#e0e1dd',
    confirmButtonColor: '#415a77'
  });
});
