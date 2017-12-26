'use strict';

const electron = require('electron');
const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

var mainWindow = null;

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Deezer Player REC",
    icon:'./build/icons/icon_32x32.png',
  });

  mainWindow.on('closed', ()=>{
    mainWindow = null
  });
  mainWindow.loadURL('https://www.deezer.com')
});

// Menú de la aplicación

app.on('ready', function() {

const {app, Menu} = require('electron')

const template = [
  {
    label: 'Editar',
    submenu: [
      {label: "Deshacer", role: 'undo'},
      {label: "Rehacer", role: 'redo'},
      {type: 'separator'},
      {label: "Copiar", role: 'copy'},
      {label: "Cortar", role: 'cut'},
      {label: "Pegar", role: 'paste'},
      {label: "Pegar formato actual", role: 'pasteandmatchstyle'},
      {label: "Eliminar", role: 'delete'},
      {label: "Seleccionar todo", role: 'selectall'}
    ]
  },
  {
    label: 'Ver',
    submenu: [
      {label: "Recargar", role: 'reload'},
      {label: "Forzar Recarga", role: 'forcereload'},
      {label: "Herramientas de Desarrollo", role: 'toggledevtools'},
      {type: 'separator'},
      {label: "Restablecer Enfoque", role: 'resetzoom'},
      {label: "Aumentar Enfoque", role: 'zoomin'},
      {label: "Alejar Enfoque", role: 'zoomout'},
      {type: 'separator'},
      {label: "Pantalla Completa", role: 'togglefullscreen'}
    ]
  },
  {
    label: "Ventana", role: 'window',
    submenu: [
      {label: "Minimizar", role: 'minimize'},
      {label: "Cerrar", role: 'close'}
    ]
  },
  {
    label: "Ayuda", role: 'Ayuda',
    submenu: [
      {
        label: 'Leer Más',
        click () { require('electron').shell.openExternal('https://github.com/rodrigoec19/deezertron') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Edit menu
  template[1].submenu.push(
    {type: 'separator'},
    {
      label: 'Speech',
      submenu: [
        {role: 'startspeaking'},
        {role: 'stopspeaking'}
      ]
    }
  )

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {role: 'zoom'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
});
