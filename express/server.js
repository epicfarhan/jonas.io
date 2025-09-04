const express = require("express");
const fs = require("fs");
const app = express();
//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("middle");
  next();
});

const data = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`));

// fetch all posts

const fetchAll = (req, res) => {
  res.json({
    status: "success",
    found: data.length,
    response: {
      data,
    },
  });
};

// fetch by id

const fetchById = (req, res) => {
  const id = req.params.id * 1;
  const found = data.find((el) => el.id === id);

  if (found === undefined) {
    res.status(404).json({
      status: "failed",
      message: "invalid id",
    });
  } else {
    res.status(200).json(found);
  }
};

// user

const getAllUser = (req, res) => {
  res.status(200).send("user list");
};

const addUser = (req, res) => {
  res.status(200).send("user added");
};

// routes
app.get("/api/v1/posts", fetchAll);
app.get("/api/v1/posts/:id", fetchById);

// user route
app.route("/api/v1/users").get(getAllUser).post(addUser);

app.listen(7000, () => console.log("server is running...."));
