const fetch = require('node-fetch').default;

const getGiphySearchUrl = (value, page) =>
  `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${
    process.env.GIPHY_API_KEY
  }&limit=20&offset=${page * 20}`;

exports.handler = (event, context, callback) => {
  const { value, page } = event.queryStringParameters;

  return fetch(getGiphySearchUrl(value, page))
    .then(response => response.json())
    .then(json => ({
      statusCode: 200,
      body: JSON.stringify({
        data: json.data,
        pagination: json.pagination,
        meta: json.meta,
      }),
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
