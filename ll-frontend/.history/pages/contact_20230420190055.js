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
      
      <h3 className="text-gray-600 text-l italic mb-3">
      Looking to order a custom cake? Please complete this form and I will
        reach out to you within 1-2 business days.
        </p>

      <form onSubmit={handleSubmit} class="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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

          <div className="w-full md:w-1/2 px-3">
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

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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

          <div className="w-full md:w-1/2 px-3">
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

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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

          <div className="w-full md:w-1/2 px-3">
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

        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="date"
            >
              
            </label>
            <input
              
              className="input input-bordered input-primary w-full max-w-xs"
              id="date"
              type="text"
              name="date"
              placeholder="Event Date"
            ></input>
          </div>

          <div className="w-full md:w-1/2 px-3">
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

        <p className="text-gray-600 text-s italic mb-3">
          Please upload any images you have in mind for the design.
        </p>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="design2"></label>
            <input
              type="file"
              id="design2"
              name="design2"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label htmlFor="design2"></label>
            <input
              type="file"
              id="design2"
              name="design2"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>

          <div className="w-full px-3">
            <label htmlFor="comments"></label>
            <textarea
              className="w-full py-3 px-4 mt-6 leading-tight focus:outline-none textarea textarea-primary"
              id="comments"
              type="text"
              name="comments"
              placeholder="*Additional Comments*"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="w-full btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
