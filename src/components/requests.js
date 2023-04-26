import axios from "axios";

axios.defaults.baseURL = "https://64492e08e7eb3378ca41ede2.mockapi.io";

export const fetchUsers = async (page) => {
  try {
    const res = await axios(`/users?page=${page}&limit=3`);
    return res.data;
  } catch (error) {
    return console.log(error.message);
  }
};

export const updateFollowers = async (newUserInfo) => {
  try {
    const { data } = await axios.put(`/users/${newUserInfo.id}`, {
      ...newUserInfo,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
