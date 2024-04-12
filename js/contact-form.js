function displayContactForm() {
  // Create a new instance of the Overlay object
  var overlay = new Overlay();
  // Set the HTML content of the overlay with a contact form
  overlay.content.innerHTML = `
    <div class="form flex-grow-1 m-2 animate__animated animate__backInLeft" id="form" itemscope="" itemtype="http://schema.org/ContactPage" itemprop="contactForm">
      <div class="heading d-flex justify-content-center">
        <h3 class="title display-3">Contact Me</h3>
      </div>
      <form class=" d-flex flex-column gap-2 text-start fs-3" aria-label="contact information">
        <div class="mb-3 mx-md-2">
          <input type="text" class="form-control form-control-lg" placeholder="Full Name" id="fullname" itemprop="name">
        </div>
        <div class="mb-3  mx-md-2">
          <input type="email" class="form-control form-control-lg" placeholder="Email Address" id="exampleInputEmail1" itemprop="email">
        </div>
        <div class="mb-3  mx-md-2">
          <input type="text" class="form-control form-control-lg" placeholder="Subject" id="subject" itemprop="description">
        </div>
        <div class="mb-3  mx-md-2">
          <textarea rows="10" class="form-control form-control-lg" placeholder="Your Message..." id="message" aria-describedby="message" itemprop="description"></textarea>
        </div>
      </form>
    </div>
`;
  // Create a submit button
  var btn_submit = document.createElement("button");
  btn_submit.innerHTML = "Submit";
  btn_submit.id = "form-contact-us";
  btn_submit.classList.add("btn");
  btn_submit.classList.add("btn-primary");
  btn_submit.classList.add("btn-lg");
  btn_submit.classList.add("px-4");
  btn_submit.classList.add("mb-4");
  btn_submit.classList.add("align-self-center");

  // Set the onclick event for the submit button to close the overlay
  btn_submit.onclick = overlay.close;

  // Append the submit button to the overlay content
  overlay.content.appendChild(btn_submit);

  // Set the text alignment and min width of the overlay content
  overlay.content.style.textAlign = "center";
  overlay.content.style.minWidth = "80%";
}
