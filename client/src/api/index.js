import axios from 'axios';

const url = 'http://localhost:5000/styles';

export const fetchStyles = () => axios.get(url);
export const createStyle = (newStyle) => axios.post(url, newStyle);