export default function ContactForm() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      event: event.target.event.value,
      servings: event.target.servings.value,
      date: event.target.date.value,
      location: event.target.location.value,
      comments: event.target.comments.value,
    };
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    // API endpoint where we send form data.
    const endpoint = "/api/form";
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Form Data: ${result.data}`);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <div>
      <h1>Custom Inquiry Form</h1>

      <form onSubmit={handleSubmit}>
        <p>
          Looking to order a custom cake? Please complete this form and I will
          reach out to you within 1-2 business days.
        </p>

        <label htmlFor="date">Event Date</label>
        <input type="date" id="date" name="date" required />

        

        <textarea
          placeholder="Additional Comments:"
          id="comments"
          name="comments"
          className="textarea textarea-primary"
        />
      </form>

      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="font-semibold pb-2 block" htmlFor="first"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="first"
              type="text"
              name="first"
              placeholder="First Name"
            />
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label className="font-semibold pb-2 block" htmlFor="last"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="last"
              type="text"
              name="last"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="email"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label htmlFor="phone"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="phone"
              type="text"
              name="phone"
              placeholder="555-555-5555"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="event"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="event"
              type="text"
              name="event"
              placeholder="Event Type"
            ></input>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label htmlFor="servings"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="servings"
              type="number"
              name="servings"
              placeholder="Number of Servings"
            ></input>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Event Date
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            ></input>
          </div>

          <div class="w-full md:w-1/2 px-3">
            <label htmlFor="location"></label>
            <input
              required
              className="input input-bordered input-primary w-full max-w-xs"
              id="location"
              type="text"
              name="location"
              placeholder="Event Location"
            ></input>
          </div>
        </div>

        <p class="text-gray-600 text-s italic mb">
          Please upload any images you have in mind for the design.
        </p>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="design2"></label>
            <input
              type="file"
              id="design2"
              name="design2"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            ></input>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="design2"></label>
            <input
              type="file"
              id="design2"
              name="design2"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            ></input>
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            ></label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Additional Comments"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
