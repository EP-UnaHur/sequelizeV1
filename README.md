#

## Dependencias

Instalar las siguiente dependencias
- sequelize - ORM
- sqlite3 - Base de datos 
- sequelize-cli - Herramienta de desarrollo para crear cosas de sequelize

### Sequelize / sqlite
```
npm i sequelize sqlite
```
### Sequelize-cli
```
npm i -D sequelize-cli
```

## Init con sequelize-cli
```
npx sequelize-cli init
```
npx es una herramiente incluída dentro de npm que facilita la ejecución automática de scripts y herramientas de Línea de Comandos.  Su nombre es un acrónimo de “Node Package eXecutor” y su objetivo principal es facilitar la ejecución de comandos de paquetes sin tener que instalarlos globalmente, es decir son herramientas que pueden estar instaladas solo en tu proyecto.

El comando **mpx sequelize-cli init** facilita la creación de carpetas, archivos y configuraciones que nos falicitan conectarnos a un base de datos de forma estandar, para luego crear schemas para poder interactuar con la base de datos.

### Configuración de la base de datos
Dentro de la carpeta config vamos a encontrar un archivo que se llama **_config.json_** y dentro de ese archivo vamos a realizar pequeños cambios para usar sqllite
```
  "development": {
    "username": "root",
    "password": null,
    "database": "ep",
    "host": "./data/ep.sqlite",
    "dialect": "sqlite"
  }
  ```

[Link a la docu oficial](https://sequelize.org/docs/v6/getting-started/)
## Models
Dentro de la carpeta models se creo un archivo index.js que nos facilita un objecto sequelize con la conexion a la base tomando la configuración del archivo **_config.json_**. 

En esta carpeta luego crearemos los Schemas que nos permitiran interactuar con la base de datos.


### Creacion de Schemas

```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

Este comando generara un clase User que vamos a poder usar para interactura con la base de datos.

