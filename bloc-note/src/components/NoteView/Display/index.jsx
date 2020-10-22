import './index.scss';
import React from 'react';
import showdown from 'showdown';

const converter = new showdown.Converter();

const NoteViewDisplay = ({ note }) => (
    <div className="NoteViewDisplay">
        <h2 className="NoteViewDisplay__title">
            <span className="NoteViewDisplay__id">#{note?.id || '(nouvelle note)'}</span>
            {note?.title}
        </h2>
        <div
            className="NoteViewDisplay__text"
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(note?.text) }}
        />
    </div>
);

export default NoteViewDisplay;
