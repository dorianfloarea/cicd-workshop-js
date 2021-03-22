const axios = require('axios').default,
      data  = {
          'circleci-build-url': 'https://circleci.com/gh/dorianfloarea/cicd-workshop-js/29'
      };

axios.post('http://f97075584da5.ngrok.io/pipeline/register', data)
     .then(() => {
         console.log('Done!');
     })
    .catch((error) => {
        console.log('Failed!', error);
        throw new Error('Request failed. Please debug more...');
    });