import axios from 'axios';

// url 인자를 받음.  주소를 받아서 axios.get 요청.
const fetcher = (url: string) => axios.get(url, { withCredentials: true }).then((response) => response.data);

export default fetcher;
