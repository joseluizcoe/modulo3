// const App = (props) => <div>
//   <Title name='Sicuto' lastName="Gabriel"/>
//   <ul>
//   { 
//     friends
//       .map( (friend, index) => 
//         <li key={index}>{friend.name}</li>
//       ) 
//   }
//   </ul>
// </div>;

class App extends React.Component {
  render() {
    return (<div>
      <Title name='Friends' lastName="Meninas"/>
      <Friends friends={this.props.friends} gender="F"/>
      <Title name='Friends' lastName="Meninos"/>
      <Friends friends={this.props.friends} gender="M"/>
    </div>)
  }
}
