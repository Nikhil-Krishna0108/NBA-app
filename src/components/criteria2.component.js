import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import C11List from './c1-1.component'
import C12List from './c1-2.component'
import C21List from './c2-1.components'
import C22List from './c2-2components'

export default function Criteria2(){
    return(
      <div>
      
        <C21List/>
        <C22List/>
      </div>
    )
  }

  