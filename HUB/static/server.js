if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const stripeSecretKey =
  "sk_test_51KrT3TFQbebkgua1GmERmM4l1gER7Td0frA1VGhO0dAxxhyiALWvFjyO7uIj8OT6QgS1a2sq0j8WYgKrvv4pxJtf00P2P4Cqd6";
const stripePublicKey =
  "pk_test_51KrT3TFQbebkgua1mwW7tpjP4Tf0PWlLI6jvQTnWL92Fl5jjlpZTpxXQClDnm44fhlkTstUFs0RZoeLmB2ZOrF8800xTHnz9no";

console.log(stripeSecretKey, stripePublicKey);
const express = require("express");
const app = express();
const fs = require("fs");
const stripe = require("stripe")(stripeSecretKey);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("static"));

app.get("/store.html", function (req, res) {
  fs.readFile("sandwich.json", function (error, data) {
    if (error) {
      res.status(500).end();
    } else {
      res.render("/templates/cart.html", {
        stripePublicKey: stripePublicKey,
        items: JSON.parse(data),
      });
    }
  });
});

app.post("/purchase", function (req, res) {
  fs.readFile("sandwich.json", function (error, data) {
    if (error) {
      res.status(500).end();
    } else {
      let total = 0;
      req.body.items.forEach(function (item) {
        const itemJson = itemsArray.find(function (i) {
          return i.id == item.id;
        });
        total = total + itemJson.price * item.quantity;
      });

      stripe.charges
        .create({
          amount: total,
          source: req.body.stripeTokenId,
          currency: "usd",
        })
        .then(function () {
          console.log("Charge Successful");
          res.json({ message: "Successfully purchased items" });
        })
        .catch(function () {
          console.log("Charge Fail");
          res.status(500).end();
        });
    }
  });
});

app.listen(3000);
