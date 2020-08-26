import React, { Component } from "react";

class Article extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       isOpen: true,
  //     };

  //     this.handleClick = handleClick.bind(this)
  //   }
  state = {
    isOpen: true,
  };

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <section>{article.text}</section>;
    console.log("---", this.props);
    return (
      <div className="hello">
        <h2>
          {article.title}
          <button onClick={this.handleClick}>
              {this.state.isOpen ? 'close' : 'open'}
              </button>
            
        </h2>
        {body}
        <h3>creation date: {new Date().toDateString()}</h3>
      </div>
    );
  }

  handleClick = () => {
    console.log("clicked");
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

function handleClick() {
  console.log("clicked");
}

export default Article;
