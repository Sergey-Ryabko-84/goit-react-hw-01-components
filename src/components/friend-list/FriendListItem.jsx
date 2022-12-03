import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendList.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
