import { Link } from "react-router-dom";

const BlogList = ({blogs, title }) => {
    return ( 
        <div className="blog-list">
            {
            //blogs.map is how we are able to see the entire blogs array on screen
            }
                 {blogs.map((blog, i) => (
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                    <h2>{ blog.title}</h2>
                    <p>Composed by { blog.author }</p>
                    </Link>
                </div>
            ))}    
        </div>
     );
}
 
export default BlogList;