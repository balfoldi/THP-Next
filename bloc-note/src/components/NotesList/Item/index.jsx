import './index.scss';
import React from 'react';

const NoteListItem = ({ note, onSelect }) => {
    const handleClick = () => {
        onSelect(note);
    };

    const { id, title, text } = note;
    const safeText = text.replace(/(#|\*|\[|\])+/gm, '');
    const shortText = safeText.substr(0, 60);

    return (
        <button type="button" className="NoteListItem" onClick={handleClick}>
            <h3 className="NoteListItem__title">{title}</h3>
            <p className="NoteListItem__text">
                <span className="NoteListItem__id">#{id}</span>
                {shortText}{safeText.length > shortText.length && '...'}
            </p>
        </button>
    );
};

export default NoteListItem;
