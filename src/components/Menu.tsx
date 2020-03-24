import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li onClick={() => console.log('good')}>
          <a href='/index.html'>Home</a>
        </li>
        <li>
          <a href='/public/public.html'>PUBLIC</a>
        </li>
        <li>
          <a href='/private/private.html'>PRIVATE</a>
        </li>
      </ul>
    );
  }
}
