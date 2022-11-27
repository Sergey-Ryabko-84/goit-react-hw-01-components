import PropTypes from 'prop-types';
import {
  ProfileBox,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Info,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Info>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Info>
        <Info>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Info>
        <Info>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Info>
      </Stats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
