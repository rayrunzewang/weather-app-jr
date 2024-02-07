import backgroundImageUrl from './assets/images/bg.png'

interface BackgroundImageProps {
  children: JSX.Element;
}

const BackgroundImage = ({ children }: BackgroundImageProps) => {
  return (
    <div
      className='w-full h-screen	bg-cover bg-center'
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >{children}</div>
  )
}

export default BackgroundImage