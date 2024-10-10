const {writeFile} = require('fs')

const stream = createWriteStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})
stream.write('hello world')
stream.end()
