export default {
  reqToken: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  },
};
