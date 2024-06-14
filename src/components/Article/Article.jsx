import React from 'react';

import './Article.css';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRendered: false };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ isRendered: true });
    }, this.props.delay);
  }

  render() {
    return (
      <article className="article">
        <img className="article-img" src={this.props.thumbnail} alt="" />

        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
        </div>
      </article>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
}
