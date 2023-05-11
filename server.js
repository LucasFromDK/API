const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let randomNum = Math.floor(Math.random() * 10 + 1)

  if (randomNum < 5) {
    res.send(`Hello World! \n${randomNum} < 5`)
  } else if (randomNum > 5) {
    res.send(`Hello World! \n${randomNum} > 5`)
  } else if (randomNum == 5) {
    res.send(`Hello World! \n${randomNum} is 5`)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})