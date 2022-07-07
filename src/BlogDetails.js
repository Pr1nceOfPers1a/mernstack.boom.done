import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BlogDetails = () => {
    const { id } =useParams()
    console.log(`blog yo mama hahha get it?, ${id}`);
    const { data: blog, error, isPending } = useFetch('https://mern-stack-finissimo.herokuapp.com/blogs/' + id)
    console.log('fetch for blogs:id', useFetch('https://mern-stack-finissimo.herokuapp.com/blogs/' + id))
    console.log('data:blog', blog)
    const navigate = useNavigate();

    const handleDelete= () => {
        fetch('https://mern-stack-finissimo.herokuapp.com/blogs/' + blog.blog._id, {
            method: 'DELETE'
        }).then(()=> {
            navigate ('/');
        })
    } 
    
    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.blog.title }</h2>
                    <div>{ blog.blog.body }</div>
                    <p>Composed by { blog.blog.author} </p>
                    <Link to={ `/update/${ id }` } style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: '8px',
                }}>Alter</Link>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;