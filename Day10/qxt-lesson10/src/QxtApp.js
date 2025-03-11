import React from 'react'
import QxtUseState from './components/QxtUseState'
import QxtUseEffect from './components/QxtUseEffect'

export default function QxtApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React hook</h1>
        <QxtUseState />
        <QxtUseEffect />
    </div>
  )
}
