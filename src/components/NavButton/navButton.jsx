import React from 'react';

export const NavButton = ({ pageId, maxPages, summary, onClickTo, name }) => {
    const isDisabled = name === 'Back'
        ? pageId <= 0
        : pageId >= maxPages || summary[pageId] === undefined;

    return (
        <button
            className={isDisabled ? 'disabled' : 'enabled clickable'}
            disabled={isDisabled}
            onClick={onClickTo}>
            {name}
        </button>
    )
};