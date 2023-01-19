import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import PostModelo from "../../componentes/PostModelo";
import posts from '../../json/posts.json';
import NaoEncontrada from "../NaoEncontrada";

import './Post.css';

export default function Post() {
  const parametros = useParams();
  const post = posts.find(post => post.id === Number(parametros.id));

  if(!post) {
    return <NaoEncontrada />
  }

  return (
    <PostModelo
      fotoCapa={`assets/posts/${post.id}`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
          {post.texto}
        </ReactMarkdown>
      </div>
    </PostModelo>
  )
}