import React from 'react';
import {render} from 'react-dom';
import Home from './scenes/home/home';
import data from './../src/params.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const homeContainer = document.getElementById("home-container");
render(<Home data={data}></Home>, homeContainer)