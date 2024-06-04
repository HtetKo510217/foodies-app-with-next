import classes from "./loding.module.css"
export default function loading() {
  return (
    <p className={classes.loading}>Fetching meals...</p>
  )
}
