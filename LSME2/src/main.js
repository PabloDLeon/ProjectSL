const { app, BrowserWindow } = require('electron')
const {getConnection} = require('./database')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  async function createProduct(registro){
      const conn = await getConnection();
      const result = await conn.query('INSERT INTO registro SET ?', registro)
      console.log(result)
  }

  module.exports = {
      createProduct
  }