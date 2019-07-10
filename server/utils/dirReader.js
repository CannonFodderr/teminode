const fs = require('fs')
const NodeCache  = require('node-cache')
const dirCache = new NodeCache()
const cacheConfig = require('../config/cacheConfig')

module.exports = (dirPath) => {
    return new Promise((resolve, reject) => {
        let cachedData = dirCache.get(dirPath)
        if(!cachedData){
            fs.readdir(dirPath, (err, filesList) => {
                if(err) reject(err)
                else {
                    // Cache data & resolve
                    dirCache.set(dirPath, filesList, cacheConfig.ttl)
                    resolve(filesList)
                }
            })
        } else {
            // reset ttl and resolve from cache
            dirCache.ttl(dirPath, cacheConfig.ttl)
            resolve(cachedData)
        }
    })
}