- add `.npmrc` file with content:
```
@flowable:registry=https://artifacts.flowable.com/artifactory/api/npm/npm-all/
//artifacts.flowable.com/artifactory/api/npm/npm-all/:_auth=<ASK_FOR_IT>
//artifacts.flowable.com/artifactory/api/npm/npm-all/:always-auth=true
```



- install dependencies


- install `json-server`

```npm install -g json-server```

- run application:

```npm run start```

- run json-server:

```json-server --watch db.json --port 3004```


#NOTE:
To reproduce the problem, set the preset to slow 3g in the "Network" tab.
