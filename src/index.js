import React from 'react';
import {render} from 'react-dom';
import Home from './scenes/home/home';

const homeContainer = document.getElementById("home-container");
render(<Home data={data}></Home>, homeContainer)