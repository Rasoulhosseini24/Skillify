var form = document.getElementById("my-form");
window.onbeforeunload = () => {
for(const form of document.getElementsByTagName('form')) {
  form.reset();
}
}


async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "ممنون از پیام شما.در اصرع وقت بررسی خواهد شد.";
      status.classList.toggle('success')
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "مشکلی پیش آمده است.لطفا اینترنت خود را بررسی کنید."
          status.classList.toggle('error')
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "مشکلی پیش آمده است.لطفا اینترنت خود را بررسی کنید."
    status.classList.toggle('error')
  });
}
form.addEventListener("submit", handleSubmit)
