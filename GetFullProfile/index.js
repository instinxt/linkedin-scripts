const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const lixAPIKey = process.env.LIX_API_KEY;;
const profileURL = 'https://www.linkedin.com/in/ashutosh-pandey12';
const lixAPIURL = 'https://api.lix-it.com/v1/person?profile_link=';

async function getLixData() {
  try {
    // Construct the API request URL
    const url = lixAPIURL + profileURL;

    // Make the GET request with Axios
    const response = await axios.get(url, {
      headers: {
        Authorization: lixAPIKey
      }
    });

    // Check for successful response
    if (response.status !== 200) {
      throw new Error(`Error: ${response.status}`);
    }

    // Handle successful response
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getLixData();
