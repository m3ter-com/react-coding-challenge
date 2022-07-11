const URL =  'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => {
  return fetch(URL, {
      method: 'get',
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      });
}