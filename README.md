# Google Developer Student Club Template Website

> 🛠 This is a work in progress. The structure may be subject to change.

This is a refactor of the [EKSU DSC](https://github.com/DSCEksu/dsceksu-laravel) website as a [gatsby](https://www.gatsbyjs.org/) template.

## Install

> Note: The application seems to work with Node.js v14, other versions will most likely not work.

You can run it locally using `node`:

```shell
# install the gatbsy CLI
$ npm install -g gatsby-cli

# install dependencies
$ npm install

# Run on localhost:8000 (by default)
$ gatsby develop
```

Or through `docker`:

```shell
# install dependencies
$ docker run --rm -it -p 8000:8000 -w="/srv" -v ${PWD}:/srv node:14 npm install

# Run on localhost:8000 (by default)
$ docker run --rm -it -p 8000:8000 -w="/srv" -v ${PWD}:/srv node:14 npm run develop -- --host 0.0.0.0 --port 8000
```

OR another way through Docker in a development environment:

```shell
docker build -t dev_web_gdsc -f Dockerfile.dev .
docker run --rm -v ${PWD}:/srv -p 8000:8000 dev_web_gdsc
```

> Note: this is only required if you want to change the website structure / hardcoded content. It is not necessary if you only want to edit metadata or teams information.

### Social links

The type `Social` in the schemas below is an object of kind `{ socialName: link }`.
The [Fontawesome](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons) library is used, and the used icons must be explicitly imported within the components.

## Site Metadata

Location: `./gatsby-config`

Schema:

```js
{
 title: string, // Site title
 description: string, // meta description
 university: string, // university name
 lang: string, // meta lang
 register: string, // link to register form
 mail: string,
 social: Social,
}
```

Social icons already imported: twitter, youtube, github

## Teams data

Location: `./teams/teams.yaml`

Schema:

```js
{
 name: string,
 rule: string,
 img: string, // relative to ./teams/
 descs: [string],
 social: Social,
}
```

Social icons already imported: twitter, linkedin, github

## Authors

- **Alessandro Scandone** (Frontend developer) - [Github profile](https://github.com/ascandone)
- **Andrea Bacciu** (Software Engineer) [Github profile](https://github.com/andreabac3)
