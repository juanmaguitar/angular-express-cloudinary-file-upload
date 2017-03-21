const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()
const upload = multer({
  dest: 'uploads/'
})

app.use( express.static(path.join(__dirname, '../client')))

app.post('/upload', upload.single('file'), (req, res) => {
  res.send(JSON.stringify(req.file));
})

module.exports = app