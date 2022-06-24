import axios from 'axios';

const EXAMPLE_API = axios.create({
  baseURL: 'http://localhost:3000',
});

const context = {
};

export type Context = typeof context;

export default context;
