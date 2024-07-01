const scriptURL = 'https://script.google.com/macros/s/AKfycbxoMMQ1ctUivmiLuL9RduOUkft8T80tTQ4b69DxOVNpBDR4J4vyHe-zTBOUcWWtGHIttg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Terima Kasih! anda telah sukses mengisi data." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})