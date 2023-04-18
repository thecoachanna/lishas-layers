export default function ContactForm() {
    return (
        <form action="/api/form" method="post">
            <label htmlFor="first">First Name</label>
            <input type="text" id="first" name="first" required />

            <label htmlFor="last">Last Name</label>
            <input type="text" id="last"/>



        </form>
    )
}