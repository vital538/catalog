import {InertiaApp} from '@inertiajs/inertia-react'
import React from 'react'
import {render} from 'react-dom'

require('./bootstrap');
const app = document.getElementById('app')

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => import(`./components/app/${name}`).then(module => module.default)}
    />,
    app
)
