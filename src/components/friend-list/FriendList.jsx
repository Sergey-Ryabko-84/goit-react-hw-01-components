import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { ListOfFriends, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem friend={friend} />
        </Item>
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
