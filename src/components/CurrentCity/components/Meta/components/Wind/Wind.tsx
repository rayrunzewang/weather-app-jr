type WindProps = {
  children: string;
};


const Wind = ({children}: WindProps) => {
  return (
    <div className=' basis-1/4 grow'>{children}</div>
  )
}

export default Wind