import React from 'react';

const SearchBar = () => {
    return (
        <div className="relative max-w-md mx-auto flex">
            <input 
                type="search" 
                id="default-search" 
                className="block w-full md:w-64 lg:w-96 2xl:w-full p-2 text-sm text-white border border-gray-300 rounded-l-full focus:outline-none bg-transparent" 
                placeholder="Search..." 
                required 
            />
            <button type="submit" className="bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-r-full px-4 py-2">
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;