import {app, BrowserWindow} from 'electron';
import path from 'path';

let win: BrowserWindow;

function createWindow () {
  win = new BrowserWindow({
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 1000,
  });
  
  win.loadFile(path.resolve('./dist/index.html'));
}

app.on('ready', createWindow);
