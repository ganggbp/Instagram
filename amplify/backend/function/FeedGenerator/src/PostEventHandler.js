const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`; //TableName-AppsyncID-envName
const UserFeedPostTableName = `UserFeedPost-${AppsyncID}-${env}`; //TableName-AppsyncID-envName

const handle = async record => {
  //handle the post event
  if (record.eventName !== 'INSERT') {
    return;
  }

  const userId = record.dynamodb.NewImage.userID.S;

  //get all the followers of the post owner
  const followers = await getFollowers(userId);
  console.log(followers);

  //push the new post, to their feeds
  await Promise.all(
    followers.map(follower =>
      pushPostToUserFeed(record.dynamodb.NewImage, follower.followerID),
    ),
  );
};

const pushPostToUserFeed = async (postImage, userID) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  const Item = {
    id: `${userID}::${postImage.id.S}`,
    postCreatedAt: postImage.createdAt.S,
    postID: postImage.id.S,
    postOwnerID: postImage.userID.S,
    userID,
    owner: `${userID}::${userID}`,

    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'UserFeedPost',
  };

  const params = {
    TableName: UserFeedPostTableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const getFollowers = async userId => {
  const params = {
    TableName: UserFollowTableName,
    IndexName: 'byFollowee',
    KeyConditionExpression: 'followeeID = :followeeID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':followeeID': userId,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();

    return result?.Items;
  } catch (e) {
    console.log(e);
  }
};

module.exports = handle;
