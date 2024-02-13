const express = require('express');
const app = express();
app.get('/', (req, res) => {
   return res.json({ message: "Server is running " })
})
const PORT = 9000;
app.listen(PORT, () => console.log("server is running on this port " + PORT))