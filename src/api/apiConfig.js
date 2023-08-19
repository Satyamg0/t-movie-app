const apiConfig = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: 'dfa2095506485681c1f2512a588c0431',
    originalImage: (imgPath) => `http://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `http://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;