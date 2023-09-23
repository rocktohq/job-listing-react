import PropTypes from 'prop-types';

const Category = ({ category }) => {

  const { logo, category_name, availability } = category;

  return (
    <div className="shadow-md rounded-md flex flex-col justify-center items-center p-5 space-y-3">
      <img className="rounded" src={logo} alt="" />
      <h2 className="text-2xl font-bold">{category_name}</h2>
      <p className="text-xl">{availability}</p>
    </div>
  )
}

export default Category;

Category.propTypes = {
  category: PropTypes.object
}