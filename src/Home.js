/* eslint-disable no-unused-vars */
import BlogList from './BlogList';
import useFetch from './useFetch.js';


const Home = () => {
    //useFetch('http://...) becomes "url" parameter in useFetch.js
     const { data: blogs, isPending, error } = useFetch('https://mern-stack-finissimo.herokuapp.com/blogs');

    return(
        <div className="home">
        {error && <div>{ error }</div>}
        { isPending && <div>Loading...</div>}
            
{//below is how to we pass the {blogs} to BlogList.js. Light blue blogs is the name of the property "prop" and 'blogs={blogs} is the prop
}
{//blogs is null, && evaluates left first and if it's false it doesnt  evaluate the right and since blogs is in fact false it doest bother with the left but since blogs is true it outputs the left instead i think
}
       {blogs && <BlogList blogs={blogs.blogs} title= "All Blogs!"/>}
{//blogs.filter is how we filter out certain , if we only want to show blogs with a certain author we do blogs.filter and it fires a callback function for each item in the array, if it returns true we keep it in
}
      {// <BlogList blogs={blogs.filter((blog) => blog.author === 'Caleb')} title="Caleb's blogs" />
} 
        </div> 
    );
}

export default Home; 
