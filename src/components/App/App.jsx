import { Profile } from '../profile/Profile';
import { Statistics } from '../statistics/Statistics';
import { FriendList } from '../friend-list/FriendList';
import { TransactionHistory } from '../transaction-history/TransactionHistory';
import user from '../profile/user.json';
import data from '../statistics/data.json';
import friends from '../friend-list/friends.json';
import transactions from '../transaction-history/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
    {/*-------- 1 - Social network profile --------*/}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    {/*-------- 2 - Statistics section -------------*/}
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    {/*-------- 3 - List of friends ----------------*/}
      <FriendList friends={friends} />
    {/*-------- 4 - History of transactions --------*/}
      <TransactionHistory items={transactions} />
    </Container>
  );
};
