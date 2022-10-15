import { FilterInput} from './Filter.styled'

export const Filter = ({filter, onChangeFilter}) => {
  return (
    <label>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find conctact"
      />
    </label>
  )
}