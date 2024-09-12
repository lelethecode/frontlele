import React from "react"

const ContactLists = ({contacts,updateContact,updateCallback}) =>{
    return <div>
        <h2>Student Lists</h2>
        <table>
            <thead>
            <img src="/images/logo.png" class = "faslogo"/>
            <tr>
                <th id = "cbox">Username</th>
                <th id = "cbox">Email</th>
                <th id = "cbox">Man</th>
                <th id = "cbox">Ngot</th>
                <th id = "cbox">Tùy chọn</th>
            </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key = {contact.id}>
                        <td id = "cbox">{contact.username}</td>
                        <td id = "cbox">{contact.email}</td>
                        <td id = "cbox">{contact.man}</td>
                        <td id = "cbox">{contact.ngot}</td>
                        <td>
                            <button onClick={() => updateContact(contact)}>Cập nhật</button>
                            <button>Xóa tài khoản</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default ContactLists