Quickstart
----------



__mongodb__:

En la carpeta `data` están las colecciones de prueba para importar en la base de datos `augusta`

```
mongoimport --db augusta --collection articles --file articles.json
mongoimport --db augusta --collection customers --file customers.json
mongoimport --db augusta --collection deliveryNotes --file deliveryNotes.json
mongoimport --db augusta --collection pricesList --file pricesList.json
mongoimport --db augusta --collection users --file users.json
mongoimport --db augusta --collection colors --file colors.json
mongoimport --db augusta --collection complements --file complements.json
```
__Variables de entorno__:

Crear las variables de entorno en el archivo `env` en la raiz del proyecto.

```sh
PORT=3000
URL_DB=mongodb://localhost:27017/augusta
SECRET=un texto cualquiera
```

__Iniciar proyecto__:


```sh
npm install
npm start
```

__Obtener token__:

```sh
POST http://localhost:3000/login
username: abel@canet.com
password: 1234
```

__Endpoints__:

```sh
get /customers
get /customers/payments
get /articles
get /pricesList
get /deliveryNotes

put /customer/:id
put /pricesList/:id

post /login
post /register
post /customer
```

