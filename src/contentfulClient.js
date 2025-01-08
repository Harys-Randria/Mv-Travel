import { createClient } from 'contentful';

const client = createClient({
  space:'wwhr6qah8mau', 
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, 
});

export default client;
