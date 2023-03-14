let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  if (
    !form.name.value &&
    !form.email.value &&
    !form.phone.value &&
    !form.message.value
  ) {
    console.warn("You must enter some data to submit this form");
    event.preventDefault();
    return;
  }
  var valid = true;
  console.log("========= Form Submisson =========");
  if (!form.name.value) {
    console.log("Name: no submission");
    valid = false;
  } else {
    console.log("Name:", form.name.value);
  }
  if (!form.email.value) {
    console.log("Email: no submission");
    valid = false;
  } else {
    console.log("Email:", form.email.value);
  }
  if (!form.phone.value) {
    console.log("Phone: no submission");
    valid = false;
  } else {
    console.log("Newsletter:", form.phone.value);
  }
  if (!form.message.value) {
    console.log("Message: no submission");
    valid = false;
  } else {
    console.log("Message:", form.message.value);
  }

  event.preventDefault();
  if (valid == true) {
    emailjs.init("YcKXL4RPQWxBq0j4D");
    emailjs.sendForm("service_ztpz8xa", "template_86j5suh", form).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
});
