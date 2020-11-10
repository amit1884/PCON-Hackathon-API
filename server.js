const http = require('http')
const app = require('./index')

const port = process.env.PORT || 8000;

const server = http.createServer(app);

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`listening on PORT ${port}`));