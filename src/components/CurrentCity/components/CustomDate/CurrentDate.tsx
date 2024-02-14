type CurrentDateProps = {
  children: string;
}

const CurrentDate  = ({children}: CurrentDateProps) => {
  
  return (
    <div className='basis-1/12 flex-auto text-xs text-left text-white'>{children}</div>
  )
}

export default CurrentDate 