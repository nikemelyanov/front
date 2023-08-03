import styles from './postForm.module.scss';

export default function PostForm() {
  return (
    <form className={styles.postForm}>
      <h1 className={styles.title}>Расскажите миру что-то новое:</h1>
      <input className={styles.postTitle} type="title" placeholder='title'/>
      <input className={styles.postBody} type="title" placeholder='body'/>
    </form>
  )
}
