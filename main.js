// main.js (in project root)
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Update the preload path to include 'src'
      preload: path.join(__dirname, 'src', 'preload.js')
    }
  });

  // Load the built index.html (adjust path as needed)
  win.loadFile(path.join(__dirname, 'dist', 'index.html'));
};

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
