import { render } from 'solid-js/web'
import { App }  from './App'

// don't edit here/write components in js mode, it for some reason
// appends instead of replaces the root element content
render(() => <App/>, document.getElementById('root'))

