import React from 'react';
import { render } from 'react-dom';
import HelloMessage from './component/helloclassComponent';
import './css/style.css';

render(<HelloMessage lastname="vasu" />, document.getElementById('root'));
