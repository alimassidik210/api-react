const callApi = async () => {
  const data = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3a7ac14f715449b595ace1cdd5bab692"
  );
  const result = await data.json();
  return result.articles;
};

const callApi2 = async (x) => {
  if (x) {
    const data1 = await fetch(
      `https://newsapi.org/v2/everything?q=${x}&apiKey=3a7ac14f715449b595ace1cdd5bab692`
    );
    const result1 = await data1.json();
    return result1.articles.splice(1, 4);
  } else {
    const data1 = await fetch(
      `https://newsapi.org/v2/everything?q=trump&apiKey=3a7ac14f715449b595ace1cdd5bab692`
    );
    const result1 = await data1.json();
    return result1.articles.splice(1, 4);
  }
};

export { callApi, callApi2 };
