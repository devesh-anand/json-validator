# json-validator

## Steps to run the application

1. Clone the repository.
2. run `npm install` to install dependencies.
3. run `npx nodemon --ignore '*.json'` to start the application.
4. To validate:
   1. From an api, you can change the "apiUrl" variable in `index.js` file, and make sure `io/input.json` is empty.
   2. Custom JSON data, simply paste the data in `input.json` under `io` folder.
5. You will see a `success` or `Invalid JSON` in terminal.
   1. If success, then you can check `output.json` (in `io` folder) for the output.

### Example:

Input: (`io/input.json`)

```json
{
  "firstName": "John",
  "age": "30",
  "rich": "true",
  "cars": [
    { "carName": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
    { "carName": "BMW", "models": ["320", "X3", "X5"] },
    { "carName": "Fiat", "models": ["500", "Panda"] }
  ]
}
```

Output: (`io/output.json`)

```json
{
  "fName": "John",
  "age": 30,
  "rich": true,
  "cars": [
    {
      "cName": "Ford",
      "models": ["Fiesta", "Focus", "Mustang"]
    },
    {
      "cName": "BMW",
      "models": ["320", "X3", "X5"]
    },
    {
      "cName": "Fiat",
      "models": ["500", "Panda"]
    }
  ]
}
```

## Unit Tests:

In file [tests.md](./tests.md)
