import styles from './postForm.module.scss';

export default function PostForm() {
  return (
    <form className={styles.postForm}>
      <h1 className={styles.title}>Tell the world something new:</h1>
      <input className={styles.postTitle} type="title" placeholder='title'/>
      <input className={styles.postBody} type="title" placeholder='body'/>
      <button type="submit">to publish</button>
    </form>
  )
}
