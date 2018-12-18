import React from 'react';
import classNames from 'classnames';

export const Content = ({ content, pages, pageId, onItemClick, summary }) => {

    return (
        <div className='content'>
            <label className='label'>{pages[pageId].title}</label>
            <ul>
                {content.map((item) => {
                    const btnClass = classNames({
                        'selected': summary[pageId] === item.id,
                        'clickable': pageId < pages.length - 1,
                    });
                    return (
                        <li
                            className={btnClass}
                            onClick={onItemClick}
                            key={item.id}
                            value={item.id}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};