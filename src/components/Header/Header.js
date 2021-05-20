import * as React from 'react'
import Logo from '../../assets/svg/Logo_ftlt.svg'
import * as ui from './ui'

export const Header = () => (
  <ui.Header>
    <ul>
      <li>
        <a href="#shop">Shop</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
      <li>
        <a href="#downloads">Downloads</a>
      </li>
    </ul>

    <Logo />

    <h1>Prints and Custom Illustrations</h1>
    <p>by Laura Heine</p>
  </ui.Header>
)
