# Spreadsheet App

This is a spreadsheet application built with Create React App (CRA).

## Getting Started

To run the application, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Fralleee/react-spreadsheet.git
```

2. Install dependencies:

```shell
cd spreadsheet-app
yarn install
```

3. Set up environment variables:

- The `.env` file is included in the repository.
- Update the `REACT_APP_API_URL` variable in the `.env` file with the exposed URL from the docker container.

4. Start the development server:

```shell
yarn start
```

This will start the application on [http://localhost:3000](http://localhost:3000).

## Running Tests

To run the tests, use the following command:

```shell
yarn test
```

This will execute the test suite and provide the test results.

## Running the API

To start the API server, you can use the following shortcut script:

```shell
yarn api
```

This will start the API server on [http://localhost:8082](http://localhost:8082).
