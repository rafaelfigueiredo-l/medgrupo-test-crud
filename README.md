# MEDGRUPO TEST CRUD

This project was created with [NESTJS](https://nestjs.com/) and [DOCKER](https://docs.docker.com/) ❤️<br/>

Learn More:

- [Getting Started](#getting-started)
- [How to use](#how-to-use)
- [Technology](#technology)
- [How to run with docker](#how-to-run-with-docker)
- [How to run tests](#how-to-run-tests)
- [Author](#author)
- [License](#license)

# Getting Started

```

$ Git --version
>= v2.25

$ node --version
>= v12.14.1

```

# Technology

- [Node](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/docs/home)
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [Docker](https://www.docker.com/)
- [YARN](https://yarnpkg.com/)
- [Webpack](https://webpack.js.org/)

# How to run with docker

- With [docker](https://docs.docker.com/install/ 'docker') and [docker compose](https://docs.docker.com/compose/install/ 'docker compose') installed, run the following:

```
git clone https://github.com/rafaelfigueiredo-l/medgrupo-test-crud
cd medgrupo-test-crud
cp .env-sample .env
cp server/config/development-sample.yml ./server/config/development.yml
cd app && yarn install
docker-compose up
```

You can test this app with [POSTMAN](https://www.postman.com/) at:
http://localhost:5061

You also can manage this db with [PGADMIN](https://www.pgadmin.org/) at:
http://localhost:5062

# How to run tests

yarn:

```
cd server
yarn test
```

npm:

```
cd server
npm test
```

# Author

**Rafael Figueiredo** - [GitHub](https://github.com/rafaelfigueiredo-l/) | [Linkedin](https://www.linkedin.com/in/rafael-figueiredo-1a076a59/)

# License

This project is under the [MIT](LICENSE) license.
