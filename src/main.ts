import {app, BrowserWindow} from 'electron';
import path from 'path';

let win: BrowserWindow;

function createWindow () {
  win = new BrowserWindow({width: 1000, height: 800});
  
  win.loadFile(path.resolve('./dist/index.html'));
}

app.on('ready', createWindow);
