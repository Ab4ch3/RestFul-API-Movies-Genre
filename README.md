# RESTful API Categories

RESTful API about film categories.

## Tech Stack

**Server:** NodeJS, Express, Javascript , MySQL

**Library:** Sequelize ORM, Swagger, Express-router, Express-validator

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, this is an example for you credentials and port.

`PORT`: `2000`

`DB_USER`: `3123`

`DB_PASS`: `123123kAp`

`DB_HOST`: `12313.com`

`DB_PORT`: `123`

`DB_NAME`: `mgta1123123one_Test123ing`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Ab4ch3/API-Categories.git
```

Go to the project directory

```bash
  cd API-Categories
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference

#### Get all Categories

```http
  GET /api/v1/categories
```

#### Get Category

```http
  GET /api/v1/categories/${idCategory}
```

| Parameter    | Type  | Description                           |
| :----------- | :---- | :------------------------------------ |
| `idCategory` | `int` | **Required**. Id of Category to fetch |

#### Create Category

```http
  POST /api/v1/categories/
```

| Body          | Type     | Description                           |
| :------------ | :------- | :------------------------------------ |
| `name`        | `string` | **Required**. name of Category        |
| `description` | `string` | **Required**. description of Category |

#### Update Category

```http
  PUT /api/v1/categories/${idCategory}
```

| Parameter    | Type  | Description                            |
| :----------- | :---- | :------------------------------------- |
| `idCategory` | `int` | **Required**. Id of Category to update |

| Body          | Type     | Description             |
| :------------ | :------- | :---------------------- |
| `name`        | `string` | name of Category        |
| `description` | `string` | description of Category |

#### Delete Category

```http
  DELETE /api/v1/categories/${idCategory}
```

| Parameter    | Type  | Description                            |
| :----------- | :---- | :------------------------------------- |
| `idCategory` | `int` | **Required**. Id of Category to delete |

## Authors

- [@Ab4ch3](https://github.com/Ab4ch3)

## Demo

is coming soon!!

## License

[MIT](https://choosealicense.com/licenses/mit/)
