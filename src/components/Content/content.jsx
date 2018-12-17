import React from 'react';
import classNames from 'classnames';

export const Content = ({ cars, pages, pageId, onItemClick, summary }) => {
    let entity = [];
    switch (pageId) {
        case 1:
            entity = cars.model.filter(x => x.brandId === summary[0]);
            break;
        case 2:
            entity = cars.engine.filter(x => cars.model[x.id].availableEngineIds.includes(x.id))
            break;
        case 3:
            entity = cars.gear.filter(x => cars.model[x.id].availableGearsIds.includes(x.id));
            break;
        case 4:
            for (let i = 0; i < summary.length; i++) {
                entity[i] = { id: i, name: `${pages[i].entity}: ${cars[pages[i].entity][summary[i] - 1].name}` };
            }
            break;
        default:
            entity = cars.brand;
    }

    return (
        <div className='content'>
            <label className='label'>{pages[pageId].title}</label>
            <ul>
                {entity.map((item) => {
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