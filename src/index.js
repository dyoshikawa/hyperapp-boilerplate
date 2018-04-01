import { h, app } from 'hyperapp'
import './index.scss'
import "jquery"
import "popper.js"
import "bootstrap"

const view = () =>
<div>
  Hello Hyperapp
</div>

app({}, {}, view, document.body)