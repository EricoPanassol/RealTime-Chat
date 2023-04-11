
const express = require('express');
const cors = require('cors');
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "ff621166-530f-4eb5-bfa2-c52c6fb84d6f" } }
        );
        return res.status(r.status).json(r.data);
    } catch(e) {
        return res.status(e.response.status).json(r.response.data)
    }

})

app.listen(3001)