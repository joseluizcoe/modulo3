class Friends extends React.Component {

  friendsByGender(gender) {
    return this.props.friends.filter( friend => {
      if (friend.gender == gender) { return friend };
    }
    )
  }

  render() {
    return(
      <ul>
      { 
        this.friendsByGender(this.props.gender)
          .map( (friend, index) => 
            <li key={index}>{friend.name}</li>
          ) 
      }
      </ul>
    )
  }
}
