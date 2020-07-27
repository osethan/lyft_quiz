'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post('/test', (req, res) => {
  const cutString = (string_to_cut) => {
    const chars = string_to_cut.split('');
    let reqChars = chars.filter((char, i) => {
      if ((i + 1) % 3 === 0) {
        return char;
      }
    });
    reqChars = reqChars.join('');
    return reqChars;
  };

  const string_to_cut = req.body.string_to_cut;
  res.json({
    return_string: cutString(string_to_cut)
  });
});

app.listen(PORT);
