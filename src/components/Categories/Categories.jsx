import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  console.log(categories)

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
        {
          categories.map(category => <Category key={category.id} category={category}></Category>)
        }
      </div>
    </section>
  )
}

export default Categories;