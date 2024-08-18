import './App.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import BlogPost from "./BlogPost";

function App() {
    const [blogs, setBlogs] = useState<string[]>([])

    useEffect(() => {
        axios
            .get('/blog/manifest.json')
            .then(response => {
                setBlogs(response.data.blogs)
            })
            .catch(reason => {
                console.error(reason)
            });
    }, []);

    return <>
        <main className="main-content">
            <section className="blog-content">
                {
                    blogs
                        .sort()
                        .map( (blog, index) => <BlogPost key={`blog-post-${index}`} fileNameWithExt={blog} />)
                }
            </section>
            <aside className="sidebar-container">
                <img className="headshot" src="/headshot.jpeg" alt="Insert super amazing headshot"/>
                <section className="sidebar">
                    <ul>
                        <li><a href="https://tandosid.dev">Siddhant's Blog</a></li>
                        <li><a href="https://github.com/cmxiv">GitHub</a></li>
                        <li><a href="https://linkedin.com/in/siddhanttandon">LinkedIn</a></li>
                        <li><a href="mailto:me@tandosid.dev">Email</a></li>
                    </ul>
                </section>
            </aside>
        </main>
    </>
}

export default App
