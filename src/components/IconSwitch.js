import React, { useState } from "react";
import { Store } from "./Store";

export function IconSwitch() {
    const [view, changeView] = useState('rows');
    function onSwitch() {
        view === 'blocks' ? changeView('rows') : changeView('blocks');
    }

    return (
        <Store onSwitch={onSwitch} view={view}/>
    )
}
