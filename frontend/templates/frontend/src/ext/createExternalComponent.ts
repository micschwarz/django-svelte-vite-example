import style from './../lib/styles/main.scss';

import type { SvelteComponentDev } from 'svelte/internal';

type Component = typeof SvelteComponentDev;
type Params = ConstructorParameters<Component>[0];

const createExternalComponent = (Component: Component) => function (params: Params) {   
    // Attach shadow DOM, if not in one
    if (params.target instanceof Element) {
        params.target = params.target.attachShadow({ mode: 'open' });
    }

    // Manipulate and include styles
    const styleForShadowDom = style.replace(/:root/g, ':host');

    const el = document.createElement('style');
    el.innerHTML = styleForShadowDom;
    params.target.append(el);

    // Create component
    return new Component(params);
}

export default createExternalComponent;