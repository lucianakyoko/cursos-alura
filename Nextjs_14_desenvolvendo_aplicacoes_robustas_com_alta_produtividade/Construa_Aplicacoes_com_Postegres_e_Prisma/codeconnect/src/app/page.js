import { CardPost } from "@/components/CardPost"
import logger from "@/logger"

import styles from './page.module.css'
import Link from "next/link"
import db from "../../prisma/db"

async function getAllPosts (page) {
  try {
    const perPage = 4;
    const skip = (page -1) * perPage;
    const totalItems = await db.post.count();
    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page -1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        author: true
      }
    });

    return {data: posts, prev, next};
    
  } catch (error) {
    logger.error('Falha ao obter posts', {error});
    return {data: [], prev: null, next: null}
  }
}

export default async function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1)
  const { data: posts, prev, next } = await getAllPosts(currentPage)
  return (
    <main className={styles.grid}>
      {posts.map(post =>  <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>
  )
}
