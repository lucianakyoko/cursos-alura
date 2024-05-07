import { CardPost } from "@/components/CardPost";

const post = {
  "id": 1,
  "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  "title": "Introdução ao React",
  "slug": "introducao-ao-react",
  "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  "author": {
      "id": 101,
      "name": "Ana Beatriz",
      "username": "anabeatriz_dev",
      "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
  }
}
export default function Home() {
  return (
    <main >
      <CardPost post={post}/>
    </main>
  );
}
