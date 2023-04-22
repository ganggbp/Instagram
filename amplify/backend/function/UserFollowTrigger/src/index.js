/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserTableName = `User-${AppsyncID}-${env}`; //TableName-AppsyncID-envName

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  for (const record of event.Records) {
    await handleEvent(record);
  }

  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleEvent = async ({eventID, eventName, dynamodb}) => {
  console.log(eventID);
  console.log(eventName);
  console.log('DynamoDB Record: %j', dynamodb);

  if (eventName === 'INSERT') {
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'nofFollowers', 1);
    await increaseUserField(dynamodb.NewImage.followerID.S, 'nofFollowings', 1);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'nofFollowers', -1);
    await increaseUserField(
      dynamodb.NewImage.followerID.S,
      'nofFollowings',
      -1,
    );
  }
};

const increaseUserField = async (userId, field, value) => {
  const params = {
    TableName: UserTableName,
    Key: {id: userId},
    UpdateExpression: 'ADD #field :inc, #version :version_inc',
    ExpressionAttributeNames: {'#field': field, '#version': '_version'},
    ExpressionAttributeValues: {':inc': value, ':version_inc': 1},
  };

  try {
    await docClient.update(params).promise();
  } catch (e) {
    console.log(e);
  }
};
