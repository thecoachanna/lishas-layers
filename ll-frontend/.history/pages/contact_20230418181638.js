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
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" name="first" required />
  
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="number" id="phone" name="phone" required />

          <label htmlFor="event-type">Event Type</label>
          <input type="text" id="event-type" name="event-type" required />

          <label htmlFor="servings">Number of Servings</label>
          <input type="number" id="servings" name="servings" required />

          <label htmlFor="date">Event Date</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="location">Event Location</label>
          <input type="location" id="location" name="location" />
        
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile"></input>
          
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile">
            
  </input>
  
          <button type="submit">Submit</button>
        </form>
        </>
    )
  }