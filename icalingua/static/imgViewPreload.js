window.copyImage = (url) => require('electron').ipcRenderer.send('copyImage', url)
window.saveSticker = (url) => require('electron').ipcRenderer.send('saveSticker', url)
