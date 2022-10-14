
export const Filter = ({filter, onChangeFilter}) => {
  return (
        <label>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onChangeFilter}
          />
        </label>
  )
}