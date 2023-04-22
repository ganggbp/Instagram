/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const postEventHandler = require('./PostEventHandler');
const userFollowEventHandler = require('./UserFollowEventHandler');

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  for (const record of event.Records) {
    await handleEvent(record);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleEvent = async record => {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamodb);

  if (record.eventSourceARN.includes('Post')) {
    // handle post event
    await postEventHandler(record);
  } else if (record.eventSourceARN.includes('UserFollow')) {
    // handle follow event
    await userFollowEventHandler(record);
  } else {
    console.error('Event not handled');
  }
};
