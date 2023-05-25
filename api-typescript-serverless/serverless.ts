import type { AWS } from '@serverless/typescript';

//import hello from '@functions/hello';
//import { createTodo, getTodo, getAllTodos, updateTodo, deleteTodo } from '@functions/todo';
//import product  from '@functions/product';


const serverlessConfiguration: AWS = {
  service: 'api-typescript-serverless',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild', 
    'serverless-dynamodb-local', 
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [{
          Effect: "Allow",
          Action: [
            "dynamodb:DescribeTable",
            "dynamodb:Query",
            "dynamodb:Scan",
            "dynamodb:GetItem",
            "dynamodb:PutItem",
            "dynamodb:UpdateItem",
            "dynamodb:DeleteItem",
          ],
          Resource: "arn:aws:dynamodb:us-east-1:*:table/PropertyTable",
        }],
      },
    },
  },
  // import the function via paths
  functions: {
    createProperty: {
      handler: "src/functions/createProperty.handler",
      events:[{
        http:{
          path: "/api/v1/property",
          method:"post",
          cors:true
        }
      }]
    },
    getAllProperties: {
      handler: "src/functions/getAllProperties.handler",
      events:[{
        http:{
          path: "/api/v1/property",
          method:"get",
          cors:true
        }
      }]
    },
    getProperty: {
      handler: "src/functions/getProperty.handler",
      events:[{
        http:{
          path: "/api/v1/property/{propertyId}",
          method:"get",
          cors:true
        }
      }]
    },
    updateProperty: {
      handler: "src/functions/updateProperty.handler",
      events:[{
        http:{
          path: "/api/v1/property/{propertyId}",
          method:"put",
          cors:true
        }
      }]
    },
    deleteProperty: {
      handler: "src/functions/deleteProperty.handler",
      events:[{
        http:{
          path: "/api/v1/property/{propertyId}",
          method:"delete",
          cors:true
        }
      }]
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb: {
      start: {
        port: 5000,
        inMemory: true,
        migrate: true,
      }
    },
    'serverless-offline': {
      httpPort: 3003,
    },
  },
  resources:{
    Resources:{
      PropertyTable:{
        Type: "AWS::DynamoDB::Table",
        Properties:{
          TableName: "PropertyTable",
          AttributeDefinitions: [{
            AttributeName: "propertyId",
            AttributeType: "S",
          }],
          KeySchema: [{
            AttributeName: "propertyId",
            KeyType: "HASH"
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          },
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
