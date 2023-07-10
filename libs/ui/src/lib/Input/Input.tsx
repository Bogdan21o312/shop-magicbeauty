import classes from "./Input.module.scss"

export function Input({...otherProps}) {

  return <input className={classes.input} {...otherProps}/>
}
