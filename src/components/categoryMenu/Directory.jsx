import DirectoryItem from "../directoryItem/DirectoryItem";

import "./Directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="category-menu">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
