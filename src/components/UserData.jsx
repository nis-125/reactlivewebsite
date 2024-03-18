const UserData = ({users,programC}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {pbId,name,designation,division,time,date,programCode} = curUser;
                    if (programC && programCode !== programC) {
                        return null;
                      }
                      else{
                    return (
                        <tr key={pbId}>
                            <td>{pbId}</td>
                            <td>{name}</td>
                            <td>{designation}</td>
                            <td>{programCode}</td>
                            <td>{time}</td>
                            <td>{date}</td>
                        </tr>
                    )}
                })

            }
        </>
    )
}
export default UserData;