# Aplicación del clima

Esta aplicación se desarrollo en baseal live de [@LeonidasEsteban](https://twitter.com/LeonidasEsteban) y Diego Velasquez [@Diegoveloper](https://twitter.com/diegoveloper) del día 11 de Julio del 2020.

Este proyecto se desarrolló con:
  - Ionic 5.x
  - Angular 9.x
  - Capacitor 2.x


## Requisitos
### Node :
https://nodejs.org/dist/v12.18.2/node-v12.18.2.pkg
### ionic
```sh
$ npm install -g @ionic/cli
```

## Ejecución de la app en el navegador

#### Importante: Para que se ejecute correctamente en el navegador, debemos instalar la siguiente extensión en chrome:
[Moesif-origin-cors-changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc)

```sh
$ npm install
$ ionic serve
```

## Ejecución de la app en dispositivos físicos

```sh
$ npm install
$ ionic build // Para construir el empaqueado web
$ npx cap add android // Para agregar el proyecto android
$ npx cap add ios // Para agregar el proyecto iOS
$ ionic cap sync // Para sincronizar el empaquetado web con los dispositivos
$ npx cap open Android // Abrirá el proyecto en Android
$ npx cap open ios // Abrirá el proyecto en Xcode
```

