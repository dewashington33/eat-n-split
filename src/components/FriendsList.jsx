import Friend from "./Friend";

function FriendsList({ friends, onSelection }) {
  
  return (
    <ul>
      {friends.map((friend) => (
        <Friend 
        friend={friend} 
        key={friend.id} 
        onSelection={onSelection} 
        />
      ))}
    </ul>
  );
}

export default FriendsList;
