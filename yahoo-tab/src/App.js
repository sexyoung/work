import cx from 'classnames';
import React, { Component } from 'react';
import tabDataList from './tab';
import './App.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tabDataList,
      tabIndex: 0,
    }
  }

  handleMouseOver(tabIndex) {
    this.setState({ tabIndex });
  }

  render() {
    const {
      tabIndex,
      tabDataList,
    } = this.state;
    const tabData = tabDataList[tabIndex];
    const [imgNews, ...list] = tabData.newsList;
    return (
      <div className="App">
        <ul className="tab-list">
          {this.state.tabDataList.map((item, index) =>
            <li
              key={item.id}
              onMouseOver={this.handleMouseOver.bind(this, index)}
              className={cx("link", {actived: index === tabIndex})}
            >
              {item.name}
            </li>
          )}
        </ul>
        <div className="tab-content">
          <div className="left-img">
            <img src={imgNews.img} alt=""/>
            <div className="title">{imgNews.title}</div>
          </div>
          <div className="right-list">
              {list.map(item =>
                <div className="news" key={item.id}>
                  <div className="title">
                    <a href="#">{item.title}</a>
                  </div>
                  <div className="intro">{item.intro}</div>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
