const chalk = require('chalk')
var fs = require('fs')
var statsFile = require('./webpack-stats-prod.json')

const newStatsFile = Object.assign({}, statsFile)

const reorder = function () {
  var editableArrayCopy = []

  statsFile.chunks.app.forEach(item => {
    editableArrayCopy.push(item)
  })

  editableArrayCopy.splice(1, 1)
  editableArrayCopy.unshift(statsFile.chunks.app[1])
  newStatsFile.chunks['app'] = editableArrayCopy
  updateFile(newStatsFile)
}

const updateFile = function (newVal) {
  var fileName = './webpack-stats-prod.json';

  fs.writeFile(fileName, JSON.stringify(newVal, null, 4), function (err) {
    if (err) return console.log(err);
    console.log(chalk.cyan('=||=|==|=||=|==|=||=|==|'))
    console.log(chalk.cyan('==|=|=|===|=|=|===|=|=|='))
    console.log(chalk.yellow('UPDATED STATS FILE ORDER.'))
    console.log(chalk.cyan('|==||==||==||==||==||==|'))
    console.log(chalk.cyan('=||=|==|=||=|==|=||=|==|'))
  });
}

module.exports = {
  shuffle: reorder
}









