const NotFound = ({postId}) => {
    return (
        <div className="container">
            <h1>Error 404</h1>
            { postId
                ? (
                    <p>Post {postId} doesn't exist</p>
                )
                : (
                    <p>Page not found</p>
                )
            }
        </div>
    );
}
 
export default NotFound;