const config = require('./config.json')

const readDir = require('./lib/readdir')

readDir(config.dataDir, config.blacklist).then(map => {
  console.log('Finished, item' + Object.keys(map).length)
})