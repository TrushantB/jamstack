// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
export default async function postReport(req, res) {
    try {
        // TODO: Take url from .env
        const report = await axios.post("https://jamstack-site-analysis-report.onrender.com/send-light-house-report", req.body)
        res.status(200).json({ data: report.data })

    } catch (err) {
        res.status(500).json({ data: err })
    }
}
