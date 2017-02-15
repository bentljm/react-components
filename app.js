class AllGroceryListItems extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

 mouseOver() {
    this.setState({
      hover: true
    });
  }

 mouseOff() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.mouseOver.bind(this)} onMouseOff={this.mouseOff.bind(this)}>
        {this.props.cookies}
        </li>
    );
  }
}

var GroceryListItem = (props) => (

  <ul>
    {props.cookies.map(grocerylistitem =>
      <AllGroceryListItems grocerylistitem={grocerylistitem} />
    )}
  </ul>

);

var GroceryList = () => (
    <ul>
      <h4>Grocery List Item</h4>
      <GroceryListItem cookies={['Cucumber', 'Kale', 'Carrots', 'Celelery']}/>
    </ul>

)



ReactDOM.render(
    <GroceryList />,
    document.getElementById('app')
  );

