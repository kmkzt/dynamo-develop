# started

https://hub.docker.com/r/amazon/dynamodb-local

```shell
docker run -p 8000:8000 amazon/dynamodb-local
# add volumes
# docker run --rm -p 8000:8000 -v ~/dynamodb-data:/data amazon/dynamodb-local -jar DynamoDBLocal.jar -dbPath /data

# or background exec
docker-compose up -d
```

access http://localhost:8000/shell/
setup config.

```js
var config = new AWS.Config({
  accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
});
```

## docker command

```shell
docker inspect amazon/dynamodb-local:latest
```

## aws command


https://docs.aws.amazon.com/ja_jp/amazondynamodb/latest/developerguide/SettingUp.html
