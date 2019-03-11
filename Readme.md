# started

https://hub.docker.com/r/amazon/dynamodb-local

```
docker run -p 8000:8000 amazon/dynamodb-local
 
//or background exec
docker-compose up -d
```

access http://localhost:8000/shell/
setup config.

```
var config = new AWS.Config({
  accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
});
```

https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/SettingUp.html
