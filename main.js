const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  mainWindow.webContents.openDevTools()

  const urlLocation = isDev ? 'http://localhost:3000' : '/'
  mainWindow.loadURL(urlLocation)
})
