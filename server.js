// require dependencies
var express = require("express");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

// initialize Express
var app = express();

// use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({
  type: "application/json"
}));

// serve the public directory
app.use(express.static("public"));

// use promises with Mongo and connect to the database
var databaseUrl = "news";
mongoose.Promise = Promise; 
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news";
mongoose.connect(MONGODB_URI);

// use handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Hook mongojs configuration to the db variable
var db = require("./models");

// get all articles from the database that are not saved
app.get("/", function(req, res) {

  db.Article.find({
      saved: false
    },

    function(error, dbArticle) {
      if (error) {
        console.log(error);
      } else {
        res.render("index", {
          articles: dbArticle
        });
      }
    })
})

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb14-the-next-stage", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img:img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape2", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb13-the-astral-force", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape3", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb12-team-dragons-vanity", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape4", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb11-crystal-melody", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity, 
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape5", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb10-the-mysterious-fortune", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape6", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb09-the-raging-tactics", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape7", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb08-my-glorious-justice", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape8", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb07-the-heroic-evolution", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape9", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb06-light-of-salvation-logic-of-destruction", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape10", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb05-primary-melody", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape11", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb04-the-answer-of-truth", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape12", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb03-ultrarare-miracle-collection", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape13", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb02-champions-of-the-asia-circuit", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape14", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb01-the-destructive-roar", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape15", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss03-festival-collection", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});



app.get("/scrape16", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss05-premium-collection-2020", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape17", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss02-colorful-pastorale-supply-gift-set", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape18", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/bushiroad-event-cards", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape19", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/infinideity-cradle", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape20", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/phantasmal-steed-restoration", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape21", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/aerial-steed-liberation", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape22", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/vilest-deletor", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape23", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/miyaji-academy-cf-club", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape24", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/strongest-team-al4", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape25", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td10-chronojet", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape26", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td11-altmile", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape27", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td12-ahsha", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape28", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-cs02-memoir-of-vanguard-koshien", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape29", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td09-shinemon-nitta", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape30", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss01-premium-collection-2019", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


app.get("/scrape31", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-rc02-revival-collection", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape32", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td08-schokolade-melody", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape33", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td07-kouji-ibuki", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape34", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td05-misaki-tokura", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape35", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td06-naoki-ishida", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape36", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-cs01-q4-vs-al4", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape37", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-mb01-psyqualia-strife", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape38", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/strongest-team-al4", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape39", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td04-ren-suzugamori", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape40", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td03-leon-soryu", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape41", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/unite-team-q4", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape42", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-start-deck-02-2018-free-experience-deck-kagero", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape43", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td01-aichi-sendou", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape44", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td02-toshiki-kai", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape45", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/gift-markers", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});



app.get("/scrape46", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-start-deck-01-2018-free-experience-deck-royal-paladin%E2%80%9D", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape47", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-promo-cards", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape48", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb07-divas-festa", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape49", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/divine-dragon-apocrypha", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape50", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-eb03-the-galaxy-star-gate", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape51", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-eb02-the-awakening-zoo", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape52", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/ultimate-stride", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape53", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb06-rondeau-of-chaos-and-salvation", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape54", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td15-messiah-dragon-of-rebirth", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape55", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/dragon-kings-awakening", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape56", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/demonic-advent", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape57", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td13-evil-eye-sovereign", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape58", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb05-prismatic-divas", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape59", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td14-debut-of-the-divas", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape60", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2017", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});



app.get("/scrape61", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-legend-deck-vol3-the-blaster", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity, 
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape62", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-chb03-rummy-labyrinth-under-the-moonlight", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape63", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/raging-clash-of-the-blade-fangs", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape64", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-chb02-we-are-trinity-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape65", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-chb01-try3-next", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape66", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td11-divine-knight-of-heavenly-decree", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape67", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td12-flower-princess-of-abundant-blooming", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape68", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tb02-touken-ranbu-online", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape69", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-ttd01-touken-ranbu-online", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape70", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-rc01-revival-collection", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape71", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/divine-dragon-caper", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape72", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td10-ritual-of-dragon-sorcery", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape73", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb04-gear-of-fate", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape74", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td09-true-zodiac-time-beasts", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape75", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/absolute-judgment", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});



app.get("/scrape76", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tcb02-the-genius-strategy", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape77", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/clan-cards", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape78", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb03-blessing-of-divas", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape79", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/glorious-bravery-of-radiant-sword", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape80", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2016", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape81", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-legend-deck-vol2-the-overlord-blaze", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape82", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-start-deck-2-knight-of-the-sun", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape83", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td08-vampire-princess-of-the-nether-hour", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape84", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/transcension-of-blade-and-blossom", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape85", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-start-deck-1-odyssey-of-the-interspatial-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape86", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tcb01-the-reckless-rampage", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape87", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/moonlit-dragonfang", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape88", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2015-winter", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape89", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td06-rallying-call-of-the-interspectral-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape90", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td07-illusionist-of-the-crescent-moon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


app.get("/scrape91", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb02-commander-of-the-incessant-waves", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape92", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cmb01-vanguard-and-deletor", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape93", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tb01-touken-ranbu-online", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape94", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/soul-strike-against-the-supreme", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape95", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb01-academy-of-divas", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape96", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/sovereign-star-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape97", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2015", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape98", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-legend-deck-vol1-the-dark", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape99", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td05-fateful-star-messiah", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape100", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/soaring-ascent-of-gale-and-blossom", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape101", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-eb01-cosmic-roar", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape102", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td04-blue-cavalry-of-the-divine-marine-spirits", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape103", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/generation-stride", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape104", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td01-awakening-of-the-interdimensional-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape105", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td02-divine-swordsman-of-the-shiny-star", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});



app.get("/scrape106", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td03-flower-maiden-of-purity", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape107", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/blazing-perdition-vere", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape108", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/legion-of-dragons-and-blades-vere", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape109", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-requiem-at-dusk", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape110", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-waltz-of-the-goddess", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape111", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-14-seeker-of-hope", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape112", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-14-seeker-of-hope", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape113", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-16-divine-judgement-o-t-bluish-flames", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape114", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-17-will-of-the-locked-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape115", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2014", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape116", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/infinite-rebirth", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape117", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-divas-duet", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape118", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/brilliant-strike", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape119", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-13-successor-of-the-sacred-regalia", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape120", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-champions-of-the-cosmos", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape121", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-divine-dragon-progression", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape122", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/catastrophic-outbreak", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape123", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/binding-force-of-the-black-rings", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape124", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-10-purgatory-revenger", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape125", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-11-star-vader-invasion", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');
      

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape126", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/mega-trial-deck-1-rise-to-royalty", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape127", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-8-liberator-of-the-sanctuary", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape128", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-9-eradicator-of-the-empire", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape129", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-celestial-valkyries", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape130", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-infinite-phantom-legion", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape131", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/kero-kero-ace-pack", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape132", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/awakening-of-twin-blades", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape133", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/blue-storm-armada", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape134", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/breaker-of-limits", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape135", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/clash-of-knights-and-dragons", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape136", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/demonic-lord-invasion", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});



app.get("/scrape137", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/descent-of-the-king-of-knights", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape138", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-banquet-of-divas", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});


// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape139", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-cavalry-of-black-steel", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      
      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape140", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-comic-style-vol-1", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape141", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-dazzling-divas", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape142", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-mystical-magus", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape143", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eclipse-of-illusionary-shadows", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape144", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/onslaught-of-dragon-souls", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape145", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/promo-cards", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape146", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/rampage-of-the-beast-king", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape147", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/seal-dragons-unleashed", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape148", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-1-blaster-blade", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape149", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-12-dimensional-brave-kaiser", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape150", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-2-dragonic-overlord", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape151", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-3-golden-mechanical-soldier", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});
app.get("/scrape152", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-4-maiden-princess-of-the-cherry-blossom", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// use cheerio to scrape stories from TechCrunch and store them
app.get("/scrape153", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-5-slash-of-silver-wolf", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape154", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-6-resonance-of-thunder-dragon", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape155", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-7-descendants-of-the-marine-emperor", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img 
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

app.get("/scrape156", function(req, res) {
  request("https://shop.tcgplayer.com/price-guide/cardfight-vanguard/triumphant-return-of-the-king-of-knights", function(error, response, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    $("tr").each(function(i, element) {

      // trim() removes whitespace because the items return \n and \t before and after the text
      var title = $(element).find("div.productDetail").text().trim();
      var price = $(element).find("td.marketPrice").text().trim();
      var medianPrice = $(element).find("td.medianPrice").text().trim();
      var rarity = $(element).find('td.rarity').text().trim();
      var img = $(element).find('img.lazy').attr('src');

      // if these are present in the scraped data, create an article in the database collection
      if (title) {
        db.Article.create({
            title: title,
            price: price,
            medianPrice: medianPrice,
            rarity: rarity,
            img: img
          },
          function(err, inserted) {
            if (err) {
              // log the error if one is encountered during the query
              console.log(err);
            } else {
              // otherwise, log the inserted data
              console.log(inserted);
            }
          });
        // if there are 10 articles, then return the callback to the frontend
        console.log(i);
        if (i === 10) {
          return res.sendStatus(200);
        }
      }
    });
  });
});

// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb06-light-of-salvation-logic-of-destruction
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb05-primary-melody
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb04-the-answer-of-truth
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb03-ultrarare-miracle-collection
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb02-champions-of-the-asia-circuit
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-eb01-the-destructive-roar
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss03-festival-collection
// Premuim collection 2020
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss05-premium-collection-2020
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss02-colorful-pastorale-supply-gift-set
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/bushiroad-event-cards
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/infinideity-cradle
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/phantasmal-steed-restoration
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/aerial-steed-liberation
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/vilest-deletor
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/miyaji-academy-cf-club
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/strongest-team-al4
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td10-chronojet
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td11-altmile
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td12-ahsha
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-cs02-memoir-of-vanguard-koshien
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td09-shinemon-nitta

// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-ss01-premium-collection-2019
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-rc02-revival-collection
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td08-schokolade-melody
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td07-kouji-ibuki
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td05-misaki-tokura
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td06-naoki-ishida
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-cs01-q4-vs-al4
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-mb01-psyqualia-strife
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/strongest-team-al4
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td04-ren-suzugamori
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td03-leon-soryu
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/unite-team-q4
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-start-deck-02-2018-free-experience-deck-kagero
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td01-aichi-sendou
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-td02-toshiki-kai
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/gift-markers
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-promo-cards
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/v-start-deck-01-2018-free-experience-deck-royal-paladin%E2%80%9D
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb07-divas-festa
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/divine-dragon-apocrypha
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-eb03-the-galaxy-star-gate
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-eb02-the-awakening-zoo
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/ultimate-stride
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb06-rondeau-of-chaos-and-salvation
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td15-messiah-dragon-of-rebirth

// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/dragon-kings-awakening
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/demonic-advent
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td13-evil-eye-sovereign
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb05-prismatic-divas
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td14-debut-of-the-divas
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2017
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-legend-deck-vol3-the-blaster
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-chb03-rummy-labyrinth-under-the-moonlight
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/raging-clash-of-the-blade-fangs
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-chb02-we-are-trinity-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-chb01-try3-next
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td11-divine-knight-of-heavenly-decree
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td12-flower-princess-of-abundant-blooming
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tb02-touken-ranbu-online
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-ttd01-touken-ranbu-online
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-rc01-revival-collection
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/divine-dragon-caper
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td10-ritual-of-dragon-sorcery
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb04-gear-of-fate
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td09-true-zodiac-time-beasts
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/absolute-judgment
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tcb02-the-genius-strategy
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/clan-cards
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb03-blessing-of-divas
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/glorious-bravery-of-radiant-sword
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2016
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-legend-deck-vol2-the-overlord-blaze
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-start-deck-2-knight-of-the-sun
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td08-vampire-princess-of-the-nether-hour
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/transcension-of-blade-and-blossom
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-start-deck-1-odyssey-of-the-interspatial-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tcb01-the-reckless-rampage
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/moonlit-dragonfang
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2015-winter
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td06-rallying-call-of-the-interspectral-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td07-illusionist-of-the-crescent-moon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb02-commander-of-the-incessant-waves
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cmb01-vanguard-and-deletor
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-tb01-touken-ranbu-online
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/soul-strike-against-the-supreme
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-cb01-academy-of-divas
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/sovereign-star-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2015
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-legend-deck-vol1-the-dark
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td05-fateful-star-messiah
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/soaring-ascent-of-gale-and-blossom
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-eb01-cosmic-roar
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td04-blue-cavalry-of-the-divine-marine-spirits
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/generation-stride
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td01-awakening-of-the-interdimensional-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td02-divine-swordsman-of-the-shiny-star
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/g-td03-flower-maiden-of-purity
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/blazing-perdition-vere
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/legion-of-dragons-and-blades-vere
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-requiem-at-dusk
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-waltz-of-the-goddess
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-14-seeker-of-hope
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-16-divine-judgement-o-t-bluish-flames
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-17-will-of-the-locked-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/fighters-collection-2014
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/infinite-rebirth
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-divas-duet
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/brilliant-strike
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-13-successor-of-the-sacred-regalia
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-champions-of-the-cosmos
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-divine-dragon-progression
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/catastrophic-outbreak
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/binding-force-of-the-black-rings
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-10-purgatory-revenger
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-11-star-vader-invasion
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/mega-trial-deck-1-rise-to-royalty
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-8-liberator-of-the-sanctuary
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-9-eradicator-of-the-empire
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-celestial-valkyries
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-infinite-phantom-legion
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/kero-kero-ace-pack
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/awakening-of-twin-blades
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/blue-storm-armada
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/breaker-of-limits
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/clash-of-knights-and-dragons
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/demonic-lord-invasion
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/descent-of-the-king-of-knights
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-banquet-of-divas
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-cavalry-of-black-steel
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-comic-style-vol-1
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-dazzling-divas
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eb-mystical-magus
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/eclipse-of-illusionary-shadows
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/onslaught-of-dragon-souls
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/promo-cards
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/rampage-of-the-beast-king
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/seal-dragons-unleashed
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-1-blaster-blade
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-12-dimensional-brave-kaiser
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-2-dragonic-overlord
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-3-golden-mechanical-soldier
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-4-maiden-princess-of-the-cherry-blossom
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-5-slash-of-silver-wolf
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-6-resonance-of-thunder-dragon
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/trial-deck-7-descendants-of-the-marine-emperor
// https://shop.tcgplayer.com/price-guide/cardfight-vanguard/triumphant-return-of-the-king-of-knights

// route for retrieving all the saved articles
app.get("/saved", function(req, res) {
  db.Article.find({
      saved: true
    })
    .then(function(dbArticle) {
      // if successful, then render with the handlebars saved page
      res.render("saved", {
        articles: dbArticle
      })
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    })

});

// route for setting an article to saved
app.put("/saved/:id", function(req, res) {
  db.Article.findByIdAndUpdate(
      req.params.id, {
        $set: req.body
      }, {
        new: true
      })
    .then(function(dbArticle) {
      res.render("saved", {
        articles: dbArticle
      })
    })
    .catch(function(err) {
      res.json(err);
    });
});

// route for saving a new note to the db and associating it with an article
app.post("/submit/:id", function(req, res) {
  db.Note.create(req.body)
    .then(function(dbNote) {
      var articleIdFromString = mongoose.Types.ObjectId(req.params.id)
      return db.Article.findByIdAndUpdate(articleIdFromString, {
        $push: {
          notes: dbNote._id
        }
      })
    })
    .then(function(dbArticle) {
      res.json(dbNote);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// route to find a note by ID
app.get("/notes/article/:id", function(req, res) {
  db.Article.findOne({"_id":req.params.id})
    .populate("notes")
    .exec (function (error, data) {
        if (error) {
            console.log(error);
        } else {
          res.json(data);
        }
    });        
});


app.get("/notes/:id", function(req, res) {

  db.Note.findOneAndRemove({_id:req.params.id}, function (error, data) {
      if (error) {
          console.log(error);
      } else {
      }
      res.json(data);
  });
});

// listen for the routes
app.listen(PORT, function() {
  console.log("App is running");
});