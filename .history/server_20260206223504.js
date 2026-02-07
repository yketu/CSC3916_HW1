const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.raw({ type: '*/*'}));

app.post('/', (req, res) => {
    const contentType = req.get('content-Type') || 'text/plain';
    res.set('content-Type',contentType);
    res.send(req.body);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Echo server listening on port ${PORT}`);
    });
}
