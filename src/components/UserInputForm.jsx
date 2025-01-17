import React, { useState } from 'react';

function UserInputForm({ onSubmit }) {
    const [section, setSection] = useState('culture');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ section, title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-[#3E5C76]">Add Your Knowledge</h3>
            <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            >
                <option value="culture">Culture</option>
                <option value="history">History</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="tourism">Tourism</option>
            </select>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
                placeholder="Share your knowledge..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button type="submit" className="w-full bg-[#3E5C76] text-white py-2 px-4 rounded-md hover:bg-[#748CAB] transition-colors duration-300">Submit</button>
        </form>
    );
}

export default UserInputForm;

