# Mi Aplicación Angular

Este proyecto es una aplicación Angular que implementa funcionalidades básicas de autenticación y operaciones CRUD.

## Características

- Autenticación de usuarios (registro, inicio de sesión, cierre de sesión)
- Protección de rutas con Guards
- Operaciones CRUD para items
- Interceptor JWT para manejar tokens de autenticación

## Requisitos previos

- Node.js (versión 14.x o superior)
- npm (normalmente viene con Node.js)
- Angular CLI (versión 16.x)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/jonatanmedina12/Project-Front-Angular-Generic.git
   ```

2. Navega al directorio del proyecto:
   ```
   cd GenericApp
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar el servidor de desarrollo:

```
ng serve
```

Navega a `http://localhost:4200/` en tu navegador. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Estructura del proyecto

- `src/app/models`: Contiene las interfaces para User e Item
- `src/app/services`: Servicios para autenticación y operaciones CRUD
- `src/app/guards`: Guard de autenticación para proteger rutas
- `src/app/interceptors`: Interceptor JWT para manejar tokens de autenticación
- `src/app/components`: Componentes para Home, Login y Register

## Compilación

Ejecuta `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.


## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir lo que te gustaría cambiar.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
