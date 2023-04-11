import {View, Text, Image, SafeAreaView, Pressable} from 'react-native';
import colors from '../../theme/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable';
import VideoPlayer from '../VideoPlayer';

import styles from './styles';
import {IPost} from '../../types/models';
import React, {useCallback, useState} from 'react';
import Carousel from '../Carousel';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  // to determine should we have "more" && "less" text
  const [lengthMore, setLengthMore] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3);
  }, []);

  const toggleLike = () => {
    setIsLiked(prev => !prev);
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.post}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>{post.user.username}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            style={styles.threeDots}
          />
        </View>

        {/* Content */}
        {content}

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

              <Ionicons
                name="chatbubble-outline"
                size={24}
                style={styles.icon}
                color={colors.black}
              />
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
          <Text style={styles.text}>
            Liked by <Text style={styles.bold}>ligtods</Text> and{' '}
            <Text style={styles.bold}>{post.nofLikes}</Text>
            others
          </Text>

          {/* Post description */}
          <Text
            style={styles.text}
            onTextLayout={onTextLayout}
            numberOfLines={isDescriptionExpanded ? 0 : 3}>
            <Text style={styles.bold}>{post.user.username}</Text>{' '}
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
          <Text style={[styles.greyText, styles.verticalSpace]}>
            View all {post.nofComments} comments
          </Text>

          {post.comments.map((comment, index) => {
            return <Comment comment={comment} key={comment.id} />;
          })}

          {/* Posted date */}
          <Text style={[styles.greyText, styles.verticalSpace]}>
            {post.createdAt}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
