/** @format */

const userList = [];

export const postUser = (req, res) => {
  const { username, password, location } = req.body;
  userList.push({ username, password, location });
  res.json("User added successfully");
  //   console.log(userList);
};

export const getUserList = (req, res) => {
  res.json(userList);
};

export const editLocation = (req, res) => {
  const { username } = req.params;
  const newLocation = req.body.location;
  const userIdx = userList.findIndex((user) => user.username === username);
  userList[userIdx].location = newLocation;
  res.json(userList[userIdx]);
};

export const getUsernameInfo = (req, res) => {
  const { username } = req.params;
  const user = userList.find((user) => user.username === username);
  res.json(user);
};

export const deleteUser = (req, res) => {
  const { username } = req.params;
  const userIdx = userList.findIndex((user) => user.username === username);
  userList.splice(userIdx, 1);
  //   console.log(userList);
  res.json(`user ${username} is deleted`);
};
