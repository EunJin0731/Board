import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import Home from './HOME';
import Board from './Board';
import Page2 from './Page2';
import './App.scss';

import Stores from './Stores';

const App = () => (
    <Provider stores={Stores}>
      <BrowserRouter>
        <header className='app-header'>
          <ul className='menubar'>
            <li><Link className='menuitem' to="/">Home</Link></li>
            <li><Link className='menuitem' to="/board">게시판</Link></li>
              <li><Link className='menuitem' to="/user">로그인</Link></li>
          </ul>
        </header>

        <section className='app-body'>
          <Route path='/' exact component={Home}/>
          <Route path='/board/:command?/:postid?' component={Board}/>
            <Route path='/user/:command?/:postid?' component={Page2}/>
        </section>
      </BrowserRouter>
    </Provider>
);

export default App;