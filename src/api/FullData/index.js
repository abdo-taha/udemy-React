const getFullData = async() => {
    const data = await fetch("http://localhost:3004/data").then(x => x.json()).catch(e => { return { loading: true } })
    return data;
}

export { getFullData }