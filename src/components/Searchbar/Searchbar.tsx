import Button from './components/Button';
import Input from './components/Input';

type SearchbarProps = {
  onSearch: () => void;
  getInputData: (query: string) => void;
}

const Searchbar = ({onSearch, getInputData}: SearchbarProps) => {
  return (
    <div className='col-span-1 flex gap-3 bg-white rounded-md	p-0.5'>
      <Input getInputData={getInputData}></Input>
      <Button onClick={onSearch}></Button>
    </div>
  );
}

export default Searchbar;