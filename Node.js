{
  "name": "omniverse-ultimate",
  "version": "2.0.0",
  "description": "Ultimate deployment platform with persistent storage",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "socket.io": "^4.7.2",
    "fs-extra": "^11.1.1",
    "multer": "^1.4.5-lts.1",
    "uuid": "^9.0.1",
    "axios": "^1.6.0",
    "adm-zip": "^0.5.10"
  },
  "engines": {
    "node": "20.x",
    "npm": "10.x"
  }
}
