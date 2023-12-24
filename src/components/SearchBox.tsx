import React from 'react';

const SearchBox: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        placeholder="Digite sua busca..."
        className="border p-2 rounded"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBox;
