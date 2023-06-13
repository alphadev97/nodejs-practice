const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("fs").promises;
const path = require("path");

const handleLogout = (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // no content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = usersDB.users.find(
    (person) => person.refreshToken === refreshToken
  );

  if (!foundUser) return res.sendStatus(403); //Forbidden

  // Evaluate Jwt

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403);
    const accessToken = jwt.sign(
      { username: decoded.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
