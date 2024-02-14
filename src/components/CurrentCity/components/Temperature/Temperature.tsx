type TempuratureProps = {
  children: number;
}

const Temperature = ({children}: TempuratureProps) => {
  return (
    <div className='basis-3/12 flex-auto text-white'>{children + ' °C'}</div>
  );
}

export default Temperature;