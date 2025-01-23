import { useState } from "react";

function List_Filter() {
  const firstlist = ['молоко', 'огурцы', 'спички', 'сметана'];
  const [filter, setFilter] = useState('');

  const handleFilterChange = (ev) => setFilter(ev.target.value);

  const filteredList = firstlist.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Введите ключевое слово"
        onChange={handleFilterChange}
        value={filter}
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List_Filter;