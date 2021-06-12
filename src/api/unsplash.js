const clientId = '61LUxehDJqjwLhm9b_0V63jdXIdNLBIV2n_SIohkwBI';

const url = `https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=${clientId}`;

const getImage = async () => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.results.map((result) => result.urls.full);
}

const unsplashApi = {
  getImage
}

export default unsplashApi;
