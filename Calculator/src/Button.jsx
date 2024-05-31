// eslint-disable-next-line react/prop-types
export default function Button({sign,onClick}) {
  return (
    <button type="button" onClick={()=> onClick(sign)}>{sign}</button>
  )
}
