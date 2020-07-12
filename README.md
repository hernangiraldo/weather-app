# Aplicación del clima

Esta aplicación se desarrollo basado en el live de [@LeonidasEsteban](https://twitter.com/LeonidasEsteban) y Diego Velasquez [@Diegoveloper](https://twitter.com/diegoveloper) del día 11 de Julio del 2020.

Este proyecto se desarrolló con:
  - Ionic 5.x
  - Angular 9.x
  - Capacitor 2.x

## Importante: 
Ahora mismo la aplicación no funciona en dispositivos físicos ni en emuladores, porque el API da un error de [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Ya me puse en contacto con la persona que la desarrollo a ver si puede permitir el acceso a su API desde localhost(porque cuando capacitor levanta la app, la levanta en un localhost dentro del webview). De igual manera, estaré haciendo el cambio para que funcione correctamente en caso de que el creador del API no de respuesta.

## Requisitos
### Node :
https://nodejs.org/dist/v12.18.2/node-v12.18.2.pkg
### ionic
```sh
$ npm install -g @ionic/cli
```

## Ejecución de la app en el navegador

#### Importante: Para que se ejecute correctamente en el navegador, debemos instal la siguiente extensión en chrome:
[Moesif-origin-cors-changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)

```sh
$ npm install
$ ionic serve
```

## Ejecución de la app

```sh
$ npm install
$ ionic build // Para construir el empaqueado web
$ npx cap add android // Para agregar el proyecto android
$ npx cap add ios // Para agregar el proyecto iOS
$ npx cap copy //Para copiar el empaquetado web a cada plataforma
$ npx cap open android // Abrirá el proyecto en Android Studio
$ npx cap open ios // Abrirá el proyecto en Xcode
```

