// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationTypes = {
  "NEW_FOLLOWER": "NEW_FOLLOWER",
  "NEW_LIKE": "NEW_LIKE",
  "NEW_COMMENT": "NEW_COMMENT"
};

const { Like, Comment, Post, User, UserFollow, UserFeedPost, Notification } = initSchema(schema);

export {
  Like,
  Comment,
  Post,
  User,
  UserFollow,
  UserFeedPost,
  Notification,
  NotificationTypes
};