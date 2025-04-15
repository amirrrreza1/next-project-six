const Photos = async () => {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    console.log(data);
    
    return (
      <>
        <h1 className="text-2xl font-bold text-center mb-4">10 Last Seen Photos</h1>
        <section className="flex flex-wrap justify-around gap-3">
          {data.slice(1, 10).map((photo) => (
            <div key={photo.id} className="w-[32%]">
              <img src={photo.download_url} alt={photo.title} className="" />
            </div>
          ))}
        </section>
      </>
    );
}
 
export default Photos;