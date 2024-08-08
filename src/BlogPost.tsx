import {useEffect, useState} from "react";
import axios from "axios";
import Markdown from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
import "./BlogPost.scss"

function BlogPost({fileNameWithExt}: { fileNameWithExt: string }) {
    const [content, setContent] = useState<string>()
    const fileName = fileNameWithExt.split('.')[0]

    useEffect(() => {
        axios
            .get(`/blog/${fileNameWithExt}`)
            .then(response => {
                setContent(response.data)
            })
            .catch(reason => {
                console.error(reason)
            })
    }, []);

    return <article id={fileName} className="blog-post">
        <Markdown
            components={{
                h1: 'h2',
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
        >{content}</Markdown>
    </article>
}

export default BlogPost
