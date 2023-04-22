import {View, Text, Image, SafeAreaView, Pressable} from 'react-native';
import colors from '../../theme/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../Comment';

import styles from './styles';
import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import {Post} from '../../API';
import PostMenu from './PostMenu';

import useLikeService from '../../services/LikeService';
import dayjs from 'dayjs';
import Content from './Content';
import UserImage from '../UserImage/UserImage';

interface IFeedPost {
  post: Post;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible = false}: IFeedPost) => {
  const navigation = useNavigation<FeedNavigationProp>();

  const {isLiked, toggleLike} = useLikeService(post);

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  // to determine should we have "more" && "less" text
  const [lengthMore, setLengthMore] = useState(false);

  const postLikes = post.Likes?.items.filter(like => !like?._deleted) || [];

  const navigateToUser = () => {
    if (post.User) {
      navigation.navigate('UserProfile', {
        screen: 'Profile',
        params: {
          userId: post.User.id,
        },
      });
    }
  };

  const navigateToComment = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  const navigateToLikes = () => {
    navigation.navigate('PostLikes', {id: post.id});
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <UserImage imageKey={post?.User?.image || undefined} />

          <Pressable onPress={navigateToUser}>
            <Text style={styles.userName}>{post.User?.username}</Text>
          </Pressable>
          <PostMenu post={post} />
        </View>

        <Content post={post} isVisible={isVisible} toggleLike={toggleLike} />

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.iconContainer}>
            <View style={styles.iconLeft}>
              <Pressable onPress={toggleLike}>
                <AntDesign
                  name={isLiked ? 'heart' : 'hearto'}
                  size={24}
                  style={styles.icon}
                  color={isLiked ? colors.accent : colors.black}
                />
              </Pressable>

              <Pressable onPress={navigateToComment}>
                <Ionicons
                  name="chatbubble-outline"
                  size={24}
                  style={styles.icon}
                  color={colors.black}
                />
              </Pressable>

              <Feather
                name="send"
                size={24}
                style={styles.icon}
                color={colors.black}
              />
            </View>

            <Feather
              name="bookmark"
              size={24}
              style={{marginLeft: 'auto'}}
              color={colors.black}
            />
          </View>

          {/* Likes */}
          {postLikes.length === 0 ? (
            <Text>Be the first to like the post</Text>
          ) : (
            <Text style={styles.text} onPress={navigateToLikes}>
              Liked by{' '}
              <Text style={styles.bold}>{postLikes[0]?.User?.username}</Text>{' '}
              {postLikes.length > 1 && (
                <>
                  and <Text style={styles.bold}>{post.nofLikes - 1}</Text>
                  others
                </>
              )}
            </Text>
          )}

          {/* Post description */}
          <Text
            style={styles.text}
            onTextLayout={onTextLayout}
            numberOfLines={isDescriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>{post.User?.username}</Text>{' '}
            {post.description}
          </Text>

          {lengthMore && (
            <Pressable onPress={toggleDescriptionExpanded}>
              <Text style={styles.greyText}>
                {isDescriptionExpanded ? 'less' : 'more'}
              </Text>
            </Pressable>
          )}

          {/* Comments */}
          {post.nofComments > 0 && (
            <Pressable onPress={navigateToComment}>
              <Text style={[styles.greyText, styles.verticalSpace]}>
                View all {post.nofComments} comments
              </Text>
            </Pressable>
          )}

          {(post.Comments?.items || []).map(
            (comment, index) =>
              comment && <Comment comment={comment} key={comment.id} />,
          )}

          {/* Posted date */}
          <Text style={[styles.greyText, styles.verticalSpace]}>
            {dayjs(post.createdAt).fromNow()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
