import { useEffect, useState, } from "react";
import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } =useParams()
    console.log(id);
    const { data: blog, error, isPending } = useFetch('http://localhost:4000/blogs/' + id);
    const [title, setTitle] = useState (blog ? blog.title:'');
    const [body, setBody] = useState (blog ? blog.body:'');
    const [author, setAuthor] = useState (blog ? blog.author:'');
    //below false because nothing is pending until we submit the form!
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        if(blog !== null){
            setTitle(blog.blog.title)
            setBody(blog.blog.body)
            setAuthor(blog.blog.author)
        }
    }, [blog])

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsSubmitting(true);
        // below makes a post request to localhost endpoint to add in a new blog which will add in a new blog and json server adds an id property for us
        fetch('http://localhost:4000/blogs',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog )
        }).then(() => {
            console.log('new blog added')
            setIsSubmitting(false);
            //history.go(-1) to go back one page
            history('/') //to go to the home page
        });
    }

    return (
        <div className="create">
            <h2>Compose a Blog</h2>
            <form onSubmit={handleSubmit}> 
                <label>Blog Title</label>
                <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                 <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                 <label>Blog Author</label>
                <textarea 
                required
                onChange={(e) => setAuthor(e.target.value)}
                ></textarea>
                { !isPending && <button>Update</button>}
                { isPending && <button disabled>Adding...</button>}
            </form>
        </div>
      );
}

export default Update;