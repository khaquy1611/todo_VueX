import axios from "axios";

export const getAllTodos = async () => {
  const res = await axios({
    method: "GET",
    url: `https://63a4177a821953d4f2a913c1.mockapi.io/todo`,
  });
  return res.data;
};

export const createTodos = async (todo) => {
  const res = await axios({
    method: "POST",
    url: `https://63a4177a821953d4f2a913c1.mockapi.io/todo`,
    data: todo,
  });
  return res.data;
};
