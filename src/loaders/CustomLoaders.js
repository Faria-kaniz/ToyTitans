const fetchToys = async (userId=0)=>{
    let url = `${import.meta.env.VITE_API_BASE_URL}toys`;
    if (userId > 0) {
        url = url + "?userId=" + userId;
    }
    const loadToys = await fetch(url);
    const toysList = await loadToys.json();

    return toysList ;
}

 
export { fetchToys };

