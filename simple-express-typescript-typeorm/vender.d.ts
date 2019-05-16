//use global object
declare module NodeJS {
  interface Global {
    NODE_ENV: any,
    redis: any
  }
}

//read JSON file
declare module "*.json" {
  const value: any;
  export default value;
}