const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "f2ff9aec-8d5b-4205-bff6-764b04be5e69" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

const server = app.listen(3002);

module.exports = { app, server };
