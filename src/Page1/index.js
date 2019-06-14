import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import Board from './index.js';

import './index.scss';

@inject('stores')
@observer
class Page1 extends Component {

    render() {
        return (
            <div className={Page1}>
                <h1>게시판</h1><hr/>
                <Board/>
            </div>
        );
    }
}

export default Page1;