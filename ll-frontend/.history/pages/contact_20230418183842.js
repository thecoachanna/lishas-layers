export default function ContactForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
  
      // API endpoint where we send form data.
      const endpoint = '/api/form'
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }
  
      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <>
        <h1>Custom Inquiry Form</h1>
        
        <form onSubmit={handleSubmit}>
          <p>Looking to order a custom cake? Please complete this form and someone from our team will reach out to you within 1-2 business days.</p>
          <label htmlFor="first"></label>
          <input
            
            type="text"
            id="first"
            name="first"
            required />
  
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            name="last"
            required />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required />

          <label htmlFor="event-type">Event Type</label>
          <input
            type="text"
            id="event-type"
            name="event-type"
            required />

          <label htmlFor="servings">Number of Servings</label>
          <input
            type="number"
            id="servings"
            name="servings"
            required />

          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            required />

          <label htmlFor="location">Event Location</label>
          <input
            type="location"
            id="location"
            name="location" />

          <p>Please upload any images you have in mind for the design.</p>
          <label for="design1">Select a file:</label>
          <input
            type="file"
            id="design1"
            name="design1"></input>
          
          <label for="design2">Select a file:</label>
          <input
            type="file"
            id="design2"
            name="design2"></input>
          
          
          <textarea
            placeholder="Additional Comments:"
            id="comments"
            name="comments"
            rows={4}
            cols={40} />
          
  
          <button type="submit">Submit</button>
        </form>
        </>
    )
  }