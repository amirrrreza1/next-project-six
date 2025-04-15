const Album = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await res.json();
    return (<>
    <h1 className="text-xl font-bold text-center mb-4">10 Last Seen Albums</h1>
    <section className="flex flex-wrap justify-around items-center gap-1">
      {data.slice(0, 10).map((album) => (
          <div key={album.id} className="w-[15%] h-[80px] m-2">
              <p className="text-center bg-gray-400 p-1 text-sm rounded-md">{album.title.slice(0 , 30)}</p>
              
        </div>
      ))}
    </section>
    </>);
}
 
export default Album;