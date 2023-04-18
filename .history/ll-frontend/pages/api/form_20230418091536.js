export default function handler(req, res) {
    const body = req.body

    console.log("body: ", body)

    if (!body.first || !body.last) {
        return res.status(400).json
    }
}