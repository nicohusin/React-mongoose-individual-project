const AddBlog = (state = [], action) => {
  
  switch (action.type) {
    
    case "addBlog":
      return [
        ...state,
        {
          values: action.values
        }
      ];

    default:
      return state;
  }
};

export default AddBlog;