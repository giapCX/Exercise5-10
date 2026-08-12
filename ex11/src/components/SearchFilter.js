import { useState } from "react";

function SearchFilter() {

  const [search, setSearch] = useState("");

  const items = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "NodeJS",
    "Java",
    "Python",
    "MongoDB",
    "MySQL"
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="exercise-box">

      <h2>3. Search Filter</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="search-list">

        {filteredItems.map((item, index) => (

          <li key={index}>
            {item}
          </li>

        ))}

      </ul>

      {filteredItems.length === 0 && (
        <p className="no-result">
          No result found
        </p>
      )}

    </div>
  );
}

export default SearchFilter;