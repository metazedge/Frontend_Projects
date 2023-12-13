import './Filter.scss'
const Filter = ({ categories, selectedCategory, setCategory }) => (
  <div className="select">
    <select
      onChange={(e) => setCategory(e.target.value)}
      className="custom-select"
      aria-label="Filter Products By Category"
      value={selectedCategory}
    >
      <option value="">Filter By Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    <span className="focus"></span>
  </div>
);

export default Filter;
