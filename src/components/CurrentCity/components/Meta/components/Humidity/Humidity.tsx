type HumidityProps = {
  children: string;
} ;

const Humidity = ({children}: HumidityProps) => {
  return (
    <div className=' basis-1/4 grow'>{children}</div>
  )
}

export default Humidity