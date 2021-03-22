const axios = require('axios').default,
      data  = {
          'circleci-build-url': process.argv.slice(2)[0]
      };

axios.post('http://f97075584da5.ngrok.io/pipeline/register', data)
     .then(() => {
         console.log('Done!', data);
     })
    .catch((error) => {
        console.log('Failed!', error);
        throw new Error('Request failed. Please debug more...');
    });