import { ChangeEvent, useState } from 'react';
import styles from './component/home.module.css';
import { Idata } from './interfaces';



function App():JSX.Element {
  const data:Idata[] = [
    {title:'Salom' , id:1 , descriptoin:'Description'},
    {title:'Hello' , id:2 , descriptoin:'Description'},
    {title:'Привет', id:3 , descriptoin:'Description'}
  ];
  const [title , setTitle] = useState<string>();
  const [arr , setArr] =useState<Idata[]>();

  const changeHandler =(e:ChangeEvent<HTMLInputElement>):void=> {
    setTitle(e.target.value);
  }

  const handleSumbit = ():void=>{
    if(!title?.length)return;
    setTitle('')
    console.log(title);

  }


  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>App Todo</h1>
       <div >
        <input onChange={changeHandler} className={styles.input} value={title} placeholder='Enter todo' type="text" />
      </div>
      <div className={styles.button}>
        <button onClick={handleSumbit}  className={styles.btn}>App Todo</button>
      </div>

        <div className={styles.card}>
        {arr?.map(c => (
        <div className={styles.cardItem} key={c.id}>
          <p key={c.title}></p>
        </div>
      ))}
        </div>
     
    </div>
  )
}

export default App
