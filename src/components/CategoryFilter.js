import React from "react";

const CategoryFilter = ({ selectedCategory, onChange }) => {
  return (
    <div>
      <label style={{ fontSize: "18px", fontWeight: "600" }} htmlFor="category">
        Filter by Category:{" "}
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
