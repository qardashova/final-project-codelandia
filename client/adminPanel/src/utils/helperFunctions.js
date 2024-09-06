export const getNameViaId = (options,ids) =>{
  return options
    .filter(option => ids.includes(option.id)) // filter based on the ids
    .map(option => option.name);
}

export const getNameById = (options,id) => {
  const option = options.find(option => option.id === id);
  return option ? option.name : null; // return name if found, else return null
};