import axios from 'axios';

const baseUrl = 'https://prept-b690a.firebaseio.com/-MNR7ko6it8emIzeTaDq';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

export default { getQuestions };
