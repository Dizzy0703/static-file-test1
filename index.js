const express = require('express');

const PORT = 4000;
const app = express();

app.use(express.static('./public'));
app.get('/', (req, res) => {
    res.send('Add "home.html" on end of URL.');
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});