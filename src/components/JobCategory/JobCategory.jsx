const JobCategory = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-purple-50 p-5 rounded-md space-y-1 flex-grow">
      <img src={logo} alt={category_name} className="w-10" />
      <h4 className="text-lg font-semibold">{category_name}</h4>
      <p>{availability}</p>
    </div>
  );
};

export default JobCategory;
