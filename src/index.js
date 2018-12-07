import React from 'react';
import {render} from 'react-dom';
import Home from './scenes/home/home';
import data from './../src/params.json';

const homeContainer = document.getElementById("home-container");
render(<Home data={data}></Home>, homeContainer)