var NewItem = createReactClass({
  handleClick() {
    var name = 'hi';//this.refs.name.value;
    var description = 'hello';//this.refs.description.value;
    $.ajax({
      url: "/api/v1/items",
      type: "POST",
      data: { item: { name: name, description: description } },
      success: item => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        <input placeholder="Enter the name of the item" />
        <input placeholder="Enter a description" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
});