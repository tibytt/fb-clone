import React from 'react';
import "./SidebarRow.css";
//avatar de material icons
import { Avatar } from '@material-ui/core';

function SidebarRow({src, Icon, title}) { // {prop} es para no usar el props.src o etc cuando lo llamas
    return (
        <div className="sidebarRow">
            {/* si existe un src lo muestra sino no */}
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default SidebarRow;
