# mtc-2023-cypress-demo

[![CI](https://github.com/wlsf82/mtc-2023-cypress-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/mtc-2023-cypress-demo/actions)
[![mtc-2023-cypress-demo](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/1zr8eq/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/1zr8eq/runs)

Sample project for a [Cypress](https://cypress.io) vs. [Playwright](https://playwright.dev/) battle at [MTC](https://minastestingconference.com.br/) 2023.

___

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.13.0` while writing this doc)
- npm (I've used version `8.19.3` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appropriate values for all the variables.

**Note:** `cypress.env.json` file is not tracked by git.

## Running the tests

In this project, you can run tests in interactive and headless modes.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode.

### Interactive mode

Run `npm run cy:open` to open the Cypress App to run tests in interactive mode.

___

Made with ❤️ by [Walmyr](https://walmyr.dev).
