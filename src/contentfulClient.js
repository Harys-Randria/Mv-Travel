import { createClient } from 'contentful';

const client = createClient({
  space:'wwhr6qah8mau', 
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN, 
});

export default client;
