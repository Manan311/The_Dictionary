const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const termEnglishSchema = require("./termEnglish-schema.js");
const termNonEnglishSchema = require("./termNonEnglish-schema.js");
const definitionSchema = require("./definition-schema.js");

module.exports = function() {
  let english, nonEnglish, def;

  return {
    connect: function() {
      return new Promise(function(resolve, reject) {
        console.log("Attempting to connect to the database...");

        mongoose.connect(
          "mongodb+srv://<username:password>@cluster0-v52un.mongodb.net/<database-name>?retryWrites=true&w=majority",
          { connectTimeoutMS: 5000, useUnifiedTopology: true }
        );

        var db = mongoose.connection;

        db.on("error", error => {
          console.log("Connection error:", error.message);
          reject(error);
        });

        db.once("open", () => {
          console.log("Connection to the database was successful");
          english = db.model("termEnglish", termEnglishSchema, "termEnglish");
          // console.log(english);
          nonEnglish = db.model(
            "termNonEnglish",
            termNonEnglishSchema,
            "termNonEnglish"
          );
          def = db.model("definition", definitionSchema, "definition");
          resolve();
        });
      });
    },

    /****************English****************/
    termEnglishGetAll: function() {
      return new Promise(function(resolve, reject) {
        english
          .find()
          .sort({ wordEnglish: "asc" })
          .exec((error, items) => {
            if (error) {
              // console.log("err");
              return reject(error.message);
            }
            // console.log(items);
            return resolve(items);
          });
      });
    },

    termEnglishGetById: function(id) {
      return new Promise(function(resolve, reject) {
        english.findById({ _id: id }, (error, item) => {
          if (error) {
            return reject(error.message);
          }
          if (item) {
            return resolve(item);
          } else {
            return reject("Not found");
          }
        });
      });
    },

    termEnglishGetByWordEnglish: function(word) {
      return new Promise(function(resolve, reject) {
        english.find({ wordEnglish: word }, (error, item) => {
          if (error) {
            return reject(error.message);
          }
          if (item) {
            return resolve(item);
          } else {
            return reject("Not found");
          }
        });
      });
    },

    termEnglishAdd: function(newItem) {
      console.log("addTermEnglish post manager");

      return new Promise(function(resolve, reject) {
        english.create(newItem, (error, item) => {
          if (error) {
            return reject(error.message);
          }
          return resolve(item);
        });
      });
    },

    termEnglishAddDefinition: async function(itemId, newItem) {

      let e = await english.findById(itemId);

      if (e) {
        e.definitions.push(newItem);
        await e.save();
        return e;
      } else {
        throw "Not found";
      }
    },

    termEnglishIncrementYes: async function(itemId) {
      console.log('inside termEnglishIncrementYes service');
      
      // if (itemId !== newItem._id) {
      //   throw "Not found";
      // }
      // console.log("before e : " + itemId);
      let e = await english.findById(itemId);
// console.log(e.helpYes);
      if (e) {
        e.helpYes++;
        await e.save();
        return e;
      } else {
        throw "Not found";
      }
    },

    termEnglishIncrementNo: async function(itemId) {
      // console.log('inside termEnglishIncrementNo service');

      let e = await english.findById(itemId);

      if (e) {
        e.helpNo++;
        await e.save();
        return e;
      } else {
        throw "Not found";
      }
    },

    termEnglishIncrementLikes: async function(itemId) {
      // console.log('inside termEnglishIncrementLikes service');

      let e = await english.findOne({ "definitions._id": itemId });

      if (e) {
        let d = e.definitions.id(itemId);
        d.likes++;
        await e.save();
        return e;
      } else {
        throw "Not found";
      }
    },

    termEnglishDelete: function(id) {
      console.log("delete English");
      return new Promise(function (resolve, reject) {
        english.findByIdAndRemove({_id: id}, (error) => {
          if (error) {
            return reject(error.message);
          }
          return resolve();
        })
      })
    },


    /****************Non-English****************/
  termNonEnglishGetAll: function() {
      return new Promise(function(resolve, reject) {
        nonEnglish
          .find()
          .sort({ wordEnglish: "asc" })
          .exec((error, items) => {
            if (error) {
              // console.log("err");
              return reject(error.message);
            }
            // console.log(items);
            return resolve(items);
          });
      });
    },

    termNonEnglishGetById: function(id) {
      return new Promise(function(resolve, reject) {
        nonEnglish.findById({ _id: id }, (error, item) => {
          if (error) {
            return reject(error.message);
          }
          if (item) {
            return resolve(item);
          } else {
            return reject("Not found");
          }
        });
      });
    },

    termNonEnglishGetByWordEnglish: function(word) {
      return new Promise(function(resolve, reject) {
        nonEnglish.find({ wordNonEnglish: word }, (error, item) => {
          if (error) {
            return reject(error.message);
          }
          if (item) {
            return resolve(item);
          } else {
            return reject("Not found");
          }
        });
      });
    },

    termNonEnglishAdd: function(newItem) {
      console.log("addTermNonEnglish manager");
      return new Promise(function(resolve, reject) {
        nonEnglish.create(newItem, (error, item) => {
          if (error) {
            return reject(error.message);
          }
          return resolve(item);
        });
      });
    },

    termNonEnglishAddDefinition: async function(itemId, newItem) {

      let n = await nonEnglish.findById(itemId);

      if (n) {
        n.definitions.push(newItem);
        await n.save();
        return n;
      } else {
        throw "Not found";
      }
    },

    termNonEnglishIncrementYes: async function(itemId) {

      let n = await nonEnglish.findById(itemId);

      if (n) {
        n.helpYes++;
        await n.save();
        return n;
      } else {
        throw "Not found";
      }
    },

    termNonEnglishIncrementNo: async function(itemId) {
      let n = await nonEnglish.findById(itemId);

      if (n) {
        n.helpNo++;
        await n.save();
        return n;
      } else {
        throw "Not found";
      }
    },

    termNonEnglishIncrementLikes: async function(itemId) {
      let n = await nonEnglish.findOne({ "definitions._id": itemId });

      if (n) {
        let d = n.definitions.id(itemId);
        d.likes++;
        await n.save();
        return n;
      } else {
        throw "Not found";
      }
    },
    termNonEnglishDelete: function(id) {
      console.log("delete nonEnglish");
      return new Promise(function (resolve, reject) {
        nonEnglish.findByIdAndRemove({_id: id}, (error) => {
          if (error) {
            return reject(error.message);
          }
          return resolve();
        })
      })
    }
  
  };
};
