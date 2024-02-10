import Button from "./components/Button";
import Input from "./components/Input";

type SearchbarProps = {
  onSearch: () => void;
}

const Searchbar = ({onSearch}: SearchbarProps) => {
  return (
    <div className="col-span-1 flex gap-3 bg-white rounded-md	p-0.5">
      <Input></Input>
      <Button onClick={onSearch}></Button>
    </div>
  );
}

export default Searchbar;