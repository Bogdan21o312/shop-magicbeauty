import styles from './page.module.scss'
import {createUser, db} from '@shop-magicbeauty/services'


export default async function Index() {
  const users = await db.user.findMany()
  return (
    <div className={styles.page}>
      <form action={createUser}>
        <input placeholder='Email' name="email" />
        <input placeholder='name' name="name"/>
        <button>ADD</button>
      </form>
      {users.map(user =>
        <div key={user.id}>
        {user.id} {user.name} {user.email}
        </div>
      )}
   </div>
  );
}
