

export const SearchTable = ({data}:any) => {
  console.log(data)
  return (
    <table>
        <tbody>
            <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            </tr>
            {data && data.map((item:any)=>(
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
            </tr>

            ))}
            
        </tbody>
    </table>
  )
}
