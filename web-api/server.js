const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static("public"));

const manager = require("./manager.js");
const m = manager();

//home
app.get("/", (req, res) => {
  // console.log('Redirect was triggered');
  res.sendFile(path.join(__dirname, "/index.html"));
});

// app.get('*', function (req, res) {
//   console.log('Redirect was triggered');
//   res.sendFile(__dirname + '/public/index.html');
// });

/****************English****************/
//get all
app.get("/api/termEnglish", (req, res) => {
  // console.log("getAll");
  m.termEnglishGetAll()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

//get by id
app.get("/api/termEnglish/:ID", (req, res) => {
  // console.log("getID");
  let id = req.params.ID;
  m.termEnglishGetById(id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found ok" });
    });
});

//get by wordEnglish
app.get("/api/termEnglish/word/:word", (req, res) => {
  let w = req.params.word;
  m.termEnglishGetByWordEnglish(w)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found ok" });
    });
});

//add new termEnglish document and definition subdoc
app.post("/api/termEnglish", (req, res) => {
  console.log("addTermEnglish post");
    m.termEnglishAdd(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ "message": error });
      })
  });

//edit to add new definition
app.put("/api/termEnglish/:id/add-defintion", (req, res) => {
  console.log("ADD : "+ req.params.id);
  m.termEnglishAddDefinition(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ "message": error });
      })
  });

//edit to increment helpyes
app.put("/api/termEnglish/yes/:id", (req, res) => {
    // m.termEnglishIncrementYes(req.body)
    // console.log('inside put yes');
    m.termEnglishIncrementYes(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found" });
    });
});

//edit to increment helpno
app.put("/api/termEnglish/no/:id", (req, res) => {
  // console.log('inside put no');
  m.termEnglishIncrementNo(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found" });
    });
});

//edit to increment likes
app.put("/api/termEnglish/likes/:id", (req, res) => {
  // console.log('inside put likes');
  m.termEnglishIncrementLikes(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found" });
    });
});

app.delete("/api/delete/termEnglish/:id", (req, res) => {
  m.termEnglishDelete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource no not found" });
    })
});

/*************Non-English**************/
//get all
app.get("/api/termNonEnglish", (req, res) => {
  m.termNonEnglishGetAll()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).json({ message: error });
    });
});

//get by id
app.get("/api/termNonEnglish/:ID", (req, res) => {
  let id = req.params.ID;
  m.termNonEnglishGetById(id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found ok" });
    });
});

//get by wordEnglish
app.get("/api/termNonEnglish/word/:word", (req, res) => {
  let w = req.params.word;
  m.termNonEnglishGetByWordEnglish(w)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found ok" });
    });
});

//add new termEnglish document and definition subdoc
app.post("/api/termNonEnglish", (req, res) => {
  console.log("addTermNonEnglish post");
  m.termNonEnglishAdd(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ "message": error });
      })
  });

//edit to add new definition
app.put("/api/termNonEnglish/:id/add-defintion", (req, res) => {
  console.log("ADD : "+ req.params.id);
  m.termNonEnglishAddDefinition(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ "message": error });
      })
  });

//edit to increment helpyes
app.put("/api/termNonEnglish/yes/:id", (req, res) => {
    // m.termEnglishIncrementYes(req.body)
    m.termNonEnglishIncrementYes(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found" });
    });
});

//edit to increment helpno
app.put("/api/termNonEnglish/no/:id", (req, res) => {
  m.termNonEnglishIncrementNo(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found" });
    });
});

//edit to increment likes
app.put("/api/termNonEnglish/likes/:id", (req, res) => {
  m.termNonEnglishIncrementLikes(req.params.id)
    .then(data => {
      res.json(data);
    })
    .catch(() => {
      res.status(404).json({ message: "Resource not found" });
    });
});

app.delete("/api/delet/termNonEnglish/:id", (req, res) => {
  console.log("nonENG del");
  m.termNonEnglishDelete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

//404
app.use((req, res) => {
  res.status(404).send("Resource not found");
});

//connect
m.connect()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log("Ready to handle requests on port " + HTTP_PORT);
    });
  })
  .catch(err => {
    console.log("Unable to start the server:\n" + err);
    process.exit();
  });
