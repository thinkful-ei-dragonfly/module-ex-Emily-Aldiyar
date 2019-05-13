import $ from 'jquery';
import 'normalize.css';

import api from './api';
import shoppingList from './shoppingList';
import store from './store';

import './index.css';





$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message))
});

