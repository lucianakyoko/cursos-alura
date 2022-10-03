import Link from 'next/link';
import { useRouter } from 'next/router';


function Post() {
  const router = useRouter();

  return (
    <div>
      id: {router.query.id}
    </div>
  );
}

export default Post