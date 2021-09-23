# Bountry Hunters API
API using Express and Mongoose

```zsh
touch app.js
```

```zsh
npm init -y
```

```zsh
npm install express mongoose
```

```json
{
    "scripts": {
        "start": "node app.js",
        "test": "mocha",
        "nodemon": "nodemon"
    }
}
```


## `hunterSchema` -> embedded into 'Bounty'

| Attribute | Type | Validations & Constraints
| --- | --- | --- |
| name | String | none |
| origin | String | none |

## `bountySchema` -> 'Bounty'

| Attribute | Type | Validations & Constraints
| --- | --- | --- |
| name | String | required: true |
| origin | String | none |
| wantedFor | String | minlength: 10, maxlength: 200 |
| client | String | none |
| reward | Number | min: 100, max: 1000000 |
| ship | String | none |
| hunters | [`hunterSchema`] | none |
| captured | Boolean | default: false |
| lastSeen | String | none |
