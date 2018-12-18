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
      content: [],
      summary: [],
    };
    this.cars = { ...cars };
    this.pages = pages;
    this.content = [];
  }

  componentDidMount() {
    this.setState(() => ({
      content: this.getContent(0),
    }));
  }
  
  onClickFwd = () => {
    this.setState((prevState) => ({
      pageId: prevState.pageId + 1,
      content: this.getContent(prevState.pageId + 1),
    }));
  }

  onClickBack = () => {
    this.setState((prevState) => ({
      pageId: prevState.pageId - 1,
      content: this.getContent(prevState.pageId - 1),
    }));
  }

  onItemClick = (e) => {
    const id = e.target.value;
    if (this.state.pageId < this.pages.length - 1) {
      let tempSummary = this.state.summary;
      tempSummary[this.state.pageId] = id;
      tempSummary.length = this.state.pageId + 1;
      this.setState(prevState => ({summary: prevState.summary}))
    }
  }

  getContent = (pageId) => {
    let entity = [];
    switch (pageId) {
      case 1:
        entity = this.cars.model.filter(x => x.brandId === this.state.summary[0]);
        break;
      case 2:
        entity = this.cars.engine.filter(x => this.cars.model[x.id].availableEngineIds.includes(x.id))
        break;
      case 3:
        entity = this.cars.gear.filter(x => this.cars.model[x.id].availableGearsIds.includes(x.id));
        break;
      case 4:
        for (let i = 0; i < this.state.summary.length; i++) {
          entity[i] = { id: i, name: `${pages[i].entity}: ${cars[pages[i].entity][this.state.summary[i] - 1].name}` };
        }
        break;
      default:
        entity = this.cars.brand;
    }
    return entity;
  }

  render() {
    return (
      <>
        <div className='navigation'>
          <NavButton
            pageId={this.state.pageId}
            maxPages={this.pages.length}
            summary={this.state.summary}
            onClickTo={this.onClickBack}
            name='Back' />
          <NavButton
            pageId={this.state.pageId}
            maxPages={this.pages.length}
            summary={this.state.summary}
            onClickTo={this.onClickFwd}
            name='Forward' />
        </div>
        <Content
          content={this.state.content}
          pages={this.pages}
          pageId={this.state.pageId}
          summary={this.state.summary}
          onItemClick={this.onItemClick} />
      </>
    );
  }
}

export default App;