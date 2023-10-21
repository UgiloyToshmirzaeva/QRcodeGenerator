let inp = document.querySelector('input');
let btn = document.querySelector('button');

function getData() {

  if (inp.value.trim() === ''){
    alert('Type smth, input is empty!!')
    return;
  }
  // Check if a QR code already exists
  let existingQrDiv = document.querySelector('.qr-code');
  
  // If it does, remove it
  if (existingQrDiv) {
    existingQrDiv.remove();
  }

  // Create a new div for the QR code
  let qrDiv = document.createElement('div');
  qrDiv.classList.add('qr-code'); // Add a class for easier selection
  qrDiv.innerHTML = `
    <img style="animation: fadeIn 4s; box-shadow: 0 0 10px 8px" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}" alt="">
  `;
  
  // Append the new QR code to the body
  document.body.appendChild(qrDiv);

  function getData() {
  // Check if a QR code already exists
  let existingQrDiv = document.querySelector('.qr-code');
  
  // If it does, remove it
  if (existingQrDiv) {
    existingQrDiv.remove();
  }

  // Create a new div for the QR code
  let qrDiv = document.createElement('div');
  qrDiv.classList.add('qr-code'); // Add a class for easier selection
  qrDiv.innerHTML = `
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp.value}" alt="">
  `;
  
  // Append the new QR code to the body
  document.body.appendChild(qrDiv);
}

}

btn.addEventListener('click', () => {
  getData();
});


