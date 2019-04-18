const express = require('express');

const cors = require('cors');

// const morgan = require('morgan');
// const winston = require('../../src/lib/winston');

const swagger = require('../../src/express/swagger');

const app = express();

const onErrorResponse = require('../../src/express/onErrorResponse');

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(express.json());

// if (process.env.NODE_ENV !== 'testing') {
//   app.use(morgan('combined', { stream: winston.stream }));
// }

app.options('*', cors({ origin: true }));

app.use('/api/v1/', require('../../src/express/routes/index'));

// Handle errors.
app.use(onErrorResponse);

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  console.log('\n🔥 API DOCS: http://localhost:5002/element-did/us-central1/main/docs\n');
}

// must go last.
swagger(app);

module.exports = app;
