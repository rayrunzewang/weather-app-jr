import Button from "./components/Button"
import Input from "./components/Input"

const Searchbar = () => {
  return (
    <div className="col-span-1 flex gap-3 bg-white rounded-md	p-0.5">
      <Input></Input>
      <Button></Button>
    </div>
  )
}

export default Searchbar