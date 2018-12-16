import React, { Component } from 'react';

import { pages } from './data/pages'
import * as cars from './data/cars'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageId: 0,
      entity: [],
    };
    this.cars = { ...cars };
    this.brand = cars.brand;
    this.model = cars.model;
    this.engine = cars.engine;
    this.gear = cars.gear;
    this.pages = pages;
    this.summary = [];
  }

  componentDidMount() {
    this.navigate();
  }

  onClickFwd = () => {
    this.setState((prevState) => ({
      pageId: prevState.pageId + 1
    }));
    // console.log('entity =', this.entity);
    this.navigate();
  }

  onClickBack = () => {
    this.setState((prevState) => ({
      pageId: prevState.pageId - 1
    }));
    // console.log('entity =', this.entity);
    this.navigate();
  }

  onItemClick = (index) => {
    console.log('index =', index);
  }

  navigate = () => {
    switch (this.state.pageId) {
      case 1:
        this.setState({
          entity: this.cars.model//.filter(x => x.brandId === this.summary[0])
        });
        //this.entity = this.cars.model.filter(x => x.brandId === this.summary[0]);
        break;
      case 2:
      this.setState({
        entity: cars.engine.filter(x => cars.model[x.id].availableEngineIds.includes(x.id))
      });
        //this.entity = cars.engine.filter(x => cars.model[x.id].availableEngineIds.includes(x.id));
        break;
      case 3:
        this.entity = cars.gear.filter(x => cars.model[x.id].availableGearsIds.includes(x.id));
        break;
      case 4:
        for (let i = 0; i < this.summary.length; i++) {
          this.entity[i] = { id: i, name: `${pages[i].entity}: ${cars[pages[i].entity][this.summary[i] - 1].name}` };
        }
        break;
      default:
        this.setState({
          entity: this.cars.brand
        });
      // this.entity = this.cars.brand;
    }
    console.log('entity =', this.entity);
  }

  render() {
    return (
      <>
        <div className='navigation'>
          <NavButton pageId={this.state.pageId} onClickTo={this.onClickBack} name='Back' />
          <NavButton pageId={this.state.pageId} onClickTo={this.onClickFwd} name='Forward' />
        </div>
        <Content list={this.state.entity} pages={this.pages} pageId={this.state.pageId} onItemClick={this.onItemClick} />
      </>
    );
  }
}

export default App;

export const NavButton = ({ name, pageId, onClickTo }) => {
  const isDisabled = name === 'Back'
    ? pageId <= 0
    : pageId >= 4;

  return (
    <button className={isDisabled ? 'disabled' : 'enabled'} disabled={isDisabled}
      onClick={onClickTo}>
      {name}
    </button>
  )
};

export const Content = ({ list, pages, pageId, onItemClick }) => {
  console.log('list =', list);
  return (
    <div className='content'>
      <label className='label'>{pages[pageId].title}</label>
      <ul>
        {list.map((item, index) => {
          return (
            <li index={index} onClick={() => onItemClick(index)} key={index}>{item.name}</li>
          )
        })}
      </ul>
    </div>
  )
};