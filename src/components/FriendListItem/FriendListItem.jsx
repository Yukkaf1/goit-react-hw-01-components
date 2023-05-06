import PropTypes from 'prop-types';
import {
  FriendStatus,
  FriendAvatar,
  Friendname,
  FriendListItemCard,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendListItemCard>
        <FriendStatus isOnline={isOnline}></FriendStatus>
        <FriendAvatar src={avatar} alt="User photo avatar" />
        <Friendname>{name}</Friendname>
      </FriendListItemCard>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
