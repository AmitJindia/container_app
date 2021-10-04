import React, { useEffect, useState } from 'react';

function RenderMFE({ name, mainUrl }) {
    const [state, setState] = useState(true);
    const existingScript = document.getElementById(`${name}-container`);
    const handleLoad = () => {
        window[`render`](`${name}-container`);
    }
    useEffect(() => {
        if (!existingScript) {
            const script = document.createElement('script')
            script.id = `${name}-container`
            script.src = mainUrl;
            document.body.appendChild(script);
            script.onload = handleLoad;
            setState(false)
        }
    }, [existingScript])

    useEffect(() => {
        if (state && existingScript) {
            window.unmount(`${name}-container`)
            handleLoad();
        }
    }, [existingScript])



    return <main id={`${name}-container`} />
}

export default RenderMFE;