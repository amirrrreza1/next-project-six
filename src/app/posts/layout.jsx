const PostLayout = ({ children ,  author }) => {
    return (<>
        
        {children}
        <p>{author}</p>
        
    </>);
}
 
export default PostLayout;