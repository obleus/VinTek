const router = require("express").Router();
const { User } = require("../../models");

// The `/api/users` endpoint

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbEmailData) => res.json(dbEmailData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get user by id
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmailData) => {
      if (!dbEmailData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbEmailData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a user
router.post("/", (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbEmailData) => {
      req.session.save(() => {
        req.session.email = dbEmailData.email;
        req.session.loggedIn = true;
        res.json(dbEmailData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a login for user
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbEmailData) => {
    if (!dbEmailData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbEmailData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.email = dbUserData.email;
      req.session.loggedIn = true;
      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// create a logout for user
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// create an update or a change to a user
router.put("/:id", (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmailData) => {
      if (!dbEmailData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbEmailData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a delete user
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEmailData) => {
      if (!dbEmailData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbEmailData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
