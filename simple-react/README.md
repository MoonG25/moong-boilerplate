# Simple React + Redux + Internationalization + Material

갖다쓰려구 만들어둔 프로젝트

## Project Setting

```sh
# Install React
yarn add react react-dom prop-types
yarn add --dev react-scripts

# Install Redux
yarn add redux redux-logger redux-thunk react-redux connected-react-router
yarn add --dev redux-devtools-extension

# Install Internationalization
yarn add react-intl

# Install Material-UI
yarn add @material-ui/core @material-ui/icons
```

- package.json

스크립트 추가하기

```json
{
  ...,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```