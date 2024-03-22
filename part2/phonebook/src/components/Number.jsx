const Number = ({pplFilter}) => {

    return(
        <ol>
        {pplFilter.map((p) => (
          <li key={p.name}>
            {p.name} {p.number}
          </li>
        ))}
      </ol>
    )
}

export default Number