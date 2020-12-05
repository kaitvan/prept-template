import axios from 'axios';

const baseUrl = 'https://prept-b690a.firebaseio.com/-MNR7ko6it8emIzeTaDq';

const getQuestions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const addQuestion = (questionObject) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}.json`, questionObject).then((response) => {
    axios.patch(`${baseUrl}/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
  }).catch((error) => reject(error));
});

export default { getQuestions, addQuestion };
