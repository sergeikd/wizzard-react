import React, { Component } from 'react';

import { Content } from './components/Content/content'
import { NavButton } from './components/NavButton/navButton'
import { pages } from './data/pages'
import * as cars from './data/cars'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: 0,
    };
    this.cars = { ...cars };
    this.pages = pages;
    this.summary = [];
  }

  onClickFwd = () => {
    this.setState((prevState) => ({
      pageId: prevState.pageId + 1
    }));
  }

  onClickBack = () => {
    this.setState((prevState) => ({
      pageId: prevState.pageId - 1
    }));
  }

  onItemClick = (e) => {
    const index = e.target.value;
    if (this.state.pageId < this.pages.length - 1) {
      this.summary[this.state.pageId] = index;
      this.summary.length = this.state.pageId + 1;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <>
        <div className='navigation'>
          <NavButton
            pageId={this.state.pageId}
            maxPages={this.pages.length}
            summary={this.summary}
            onClickTo={this.onClickBack}
            name='Back' />
          <NavButton
            pageId={this.state.pageId}
            maxPages={this.pages.length}
            summary={this.summary}
            onClickTo={this.onClickFwd}
            name='Forward' />
        </div>
        <Content
          cars={this.cars}
          pages={this.pages}
          pageId={this.state.pageId}
          summary={this.summary}
          onItemClick={this.onItemClick} />
      </>
    );
  }
}

export default App;