const Filter = ({
    showFilter,
    setShowFilter
    
}) => {

    

    const handlerFilter = (e) => {
        setShowFilter(e.target.value);
      };
    return (
        <div>
        filter name: <input value={showFilter} onChange={handlerFilter} />
      </div>
    )
}

export default Filter