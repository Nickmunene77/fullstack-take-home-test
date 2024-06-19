const Card = ({ children, bg = 'bg-[rgb(255,218,203)]' }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
}
export default Card
