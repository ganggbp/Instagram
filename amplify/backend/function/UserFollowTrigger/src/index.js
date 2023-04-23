/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const {v4: uuidv4} = require('uuid');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserTableName = `User-${AppsyncID}-${env}`; //TableName-AppsyncID-envName
const NotificationTableName = `Notification-${AppsyncID}-${env}`; //TableName-AppsyncID-envName

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

  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === 'INSERT') {
    //user A follow user B
    await increaseUserField(followeeID, 'nofFollowers', 1);
    await increaseUserField(followerID, 'nofFollowings', 1);
    await createFollowNotification(followeeID, followerID);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
    await increaseUserField(followeeID, 'nofFollowers', -1);
    await increaseUserField(followerID, 'nofFollowings', -1);
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

const createFollowNotification = async (userId, actorId) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    id: uuidv4(),
    type: 'NEW_FOLLOWER',
    actorId,
    userId,
    readAt: 0,

    owner: `${actorId}::${actorId}`,
    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'Notification',
  };

  console.log('Item', Item);

  const params = {
    TableName: NotificationTableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};
