const paginate = (followers) => {
    const itemsPerPage = 9;  
    const pages = Math.ceil(followers.length / itemsPerPage); 
    const newFollowers = Array.from({length : pages}, ( _, index)=> { //iterate over ceil(100/9) pages
        const start = index * itemsPerPage; // eg 0 9 18 27
        return followers.slice(start, start + itemsPerPage); //[0 to 9] 9 excluded so 0 to 8
    }) 
    return newFollowers
}

export default paginate
