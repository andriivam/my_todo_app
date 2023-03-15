import React from 'react'

export default function ItemStatusFilter({ filter, onFilterChange }) {

    const showAll = () => {
        onFilterChange('all');
    };

    const showActive = () => {
        onFilterChange('active');
    };
    const showDone = () => {
        onFilterChange('done');
    };

    return (
        <div className="btn-group">
            <button onClick={() => showAll()} type="button" className={`btn btn-outline-secondary ${filter === 'all' ? 'btn-info' : ''}`}>All</button>
            <button onClick={() => showActive()} type="button" className={`btn btn-outline-secondary ${filter === 'active' ? 'btn-info' : ''}`}>Active</button>
            <button onClick={() => showDone()} type="button" className={`btn btn-outline-secondary ${filter === 'done' ? 'btn-info' : ''}`}>Done</button>
        </div >
    )
};
