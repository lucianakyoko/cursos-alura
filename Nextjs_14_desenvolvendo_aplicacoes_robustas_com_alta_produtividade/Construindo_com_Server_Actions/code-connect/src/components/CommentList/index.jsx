import { Comment } from "../Comment";
import { ReplyModal } from "../ModalReply";
import { Replies } from "../Replies";
import styles from './commentlist.module.css';

export const CommentList = ({comments}) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map(comment => (
          <li>
            <Comment key={comment.id} comment={comment} />
            <ReplyModal comment={comment} />
            <Replies />
          </li>
        ))}
      </ul>
    </section>
  );
}