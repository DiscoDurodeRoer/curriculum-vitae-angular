# Proyecto Curriculum vitae

La finalidad de este proyecto, es proporcionar una aplicación web realizada en Angular, para crear tu propio curriculum vitae ligero y personalizable en cuanto a datos.

Actualmente, se encuentra en la versión 7 de Angular.

# Instalación en local

Descargate el proyecto y guardalo en cualquier carpeta de tu equipo.

Necesitarás instalar estos programas:
- NodeJS (https://nodejs.org/es/)

También debes instalar angular cli, lo puedes hacer asi:

```json
npm install -g @angular/cli
```
Abre una terminal, posicionate sobre el directorio y haz:

```json
npm install
```

Una vez lo tengas, puedes hacer

```json
npm start
```
o
```json
ng serve
```
para iniciar el proyecto.

Abre tu navegador favorito y escribe http://localhost:4200

Cambia los datos localizado en src/assets/datos.json para personalizarlo a tu gusto.

Si quieres editar código, te recomiendo que uses Visual Studio Code (https://code.visualstudio.com/).

# Configuracion de datos
En el fichero datos.json contiene las siguientes opciones:

- datos_personales: se utiliza para mostrar tus datos personales contiene el nombre de la columna y su valor, solo debes poner los datos que tu necesites, tiene la siguiente estructura:
```json
{
      "column_display": "Nombre",
      "column_value": "Fernando"
}
```
- estudios: contiene los estudios realizados, tiene la siguiente estructura:

```json
{
    "rango": "2010-2012",
    "lugar": "IES Maestre de Calatrava, Ciudad Real",
    "titulo": "Técnico en Microsistemas Informáticos y Redes",
    "nota": "9.31"
}
```
- cursos: contiene los cursos realizados, tiene la siguiente estructura:

```json
{
    "anio": "2011",
    "nombre": "Cisco Information Technology Essentials: Hardware and Software",
    "lugar": "IES Maestre de Calatrava",
    "horas": "20",
    "tipo": "Presencial"
}
```
- experiencias: contiene toda la experiencia laboral, tiene la siguiente estructura:

```json
{
    "rango": "Marzo 2012 - Junio 2012",
    "compania": "SEC",
    "posicion": "Administrador de sistemas",
    "descripcion": "Encargado de las redes y del mantenimiento y funcionamiento de los equipos de la empresa"
}
```
- habilidades: contiene en que grado porcentual tienes experiencia sobre una materia o conocimiento en concreto, tiene la siguiente estructura:
```json
{
    "nombre": "Java SE",
    "valor": "90"
}
```
IMPORTANTE: el valor debe estar entre 0 y 100

webUrl: indica donde se localiza la web o host que contiene el API REST. Se usa para la parte de trabajos. Mi personal recomendación es un wordpress con este plugin https://es.wordpress.org/plugins/json-api/

categoryId: indica el id de la categoria donde se encuentra los posts que queremos utilizar. Pensado para el anterior plugin descrito.

# Realización del proyecto paso a paso
¿Tienes curiosidad sobre como se ha desarrollado el proyecto o quieres ver como se realizan este tipo de proyectos?

Todo el desarrollo se sube en mi canal de Youtube, te dejo la lista de reproducción.

https://www.youtube.com/watch?v=RsaYuwhnujw&list=PLaxZkGlLWHGXRn4GMU7oeLYgPOfPO4j1S

No dudes en comentar dudas, por aquí en github o en los comentarios de los vídeos.

# ¿Dudas? ¿Sugerencias?
Si tienes dudas o quieres algo de personalización (previo pago) puedes mandarnos un mensaje a administrador@discoduroderoer.es

Si quieres que realicemos alguna mejora general, abre un "issue" aquí en github. Lo arreglaré lo antes posible.
