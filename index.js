const AWS = require('aws-sdk')
const config = {
  endpoint: 'http://localhost:8000',
  region: 'us-west-2',
  accessKeyId: 'localkey',
  secretAccessKey: 'localsecretkey',
  sslEnabled: false
}
AWS.config.update(config)
const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: 'TestTable',
  AttributeDefinitions: [
    {
      AttributeName: 'Id',
      AttributeType: 'S'
    },
    {
      AttributeName: 'Numbers',
      AttributeType: 'N'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'Id',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'Numbers',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
}

dynamodb.createTable(params, (err, data) => {
  if (err) console.log(err, err.stack)
  else console.log(data)
})