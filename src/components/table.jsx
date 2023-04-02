import React from 'react'
import PropTypes from 'prop-types'

function Table(props) {
    const {users} = props

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Number</td>
                </tr>
            </thead>
            <tbody>
                {users.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

Table.propTypes = {

}

export default Table
