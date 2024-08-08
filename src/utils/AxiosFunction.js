import axios from "axios";

const readData = async (baseURL) => {
  const res = await axios.get(baseURL);
  //   console.log(res.data);
  return res.data;
};

const createPost = async (baseURL, title, body) => {
  axios;
  const res = await axios.post(baseURL, {
    title,
    body,
  });

  return res.data;
};

export { readData, createPost };
