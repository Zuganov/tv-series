# TVSeries

Example app

## Prerequisites

- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [React Native Setup](https://reactnative.dev/docs/environment-setup)

## Running

To install js dependencies, run the follow command on project root folder

```sh
yarn
```

If you want to run on iOS devices/simulators, it's necessary to install iOS dependencies

```sh
cd ios && pod install
```

After running both commands, you're ready to run

```sh
# to run on iOS - debug mode
yarn ios:dev

# to run on Android - debug mode
yarn android:dev

# to run on Android - release mode
yarn android:release
```
