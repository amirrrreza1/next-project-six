const Authors = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    

    return (<>
    <h1>Helllo</h1>
    </>);
}
 
export default Authors;