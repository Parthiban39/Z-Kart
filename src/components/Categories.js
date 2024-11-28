import React from "react";
import './Categories.css';

function Categories() {
  const categories = ["Technology", "Lifestyle", "Health & Wellness", "Education" , "Home Appliances","Sports"];
  return (
    <div className="container1">
      <h2>Categories</h2>
      <div className="categories-row">
        {
          categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="card-content">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">Discover trends and resources in {category}.</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Categories;
