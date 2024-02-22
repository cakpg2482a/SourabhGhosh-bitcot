import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import Cdata from "../json/sample.json";

function Contacts_view() {
  const [data, SetData] = useState([]);
  const [name, SetName] = useState("")
  const [mobile, SetMobile] = useState("")
  const [email, SetEmail] = useState("")
  const [id, SetId] = useState(0)
  const [update, SetUpdate] = useState(false)
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    SetData(Cdata);
  }, []);


  const edit_Contact = (id) => {
    // alert(id)

    const edit = data.filter(item => item.id === id);
    if (id !== undefined) {

      SetUpdate(true)
      SetId(id)
      SetName(edit[0].name)
      SetMobile(edit[0].mobile)
      SetEmail(edit[0].email)
    }

  }
  const delete_Contact = (id) => {
    //  alert(id) 
    if (window.confirm("Are  you  sure to delete this item")) {
      if (id > 0) {
        const del = data.filter(item => item.id !== id)
        SetData(del)
      }
    }

  }
  const save_Contact = (e) => {
    let error = "";
    if (name === "") {
      error += "Name is required\n"
    }

    if (mobile === "") {
      error += "Mobile is required with 10 digit\n"
    }

    if (email === "") {
      error += "email is required\n"
    }

    if (error !== "") {
      e.preventDefault()
      alert(error)
      return;
    }
    const save = [...data]
    const save_con = {
      id: Cdata.length + 1,
      name: name,
      mobile: mobile,
      email: email

    }
    save.push(save_con)
    SetData(save)
    clear_Contact()
  }
  const clear_Contact = () => {
    SetId("")
    SetName("")
    SetMobile("")
    SetEmail("")
    SetUpdate(false)

  }

  const update_Contact = () => {

    const index = data.map((item) => {
      return item.id;
    }).indexOf(id)
    const update = [...data];
    update[index].name = name;
    update[index].mobile = mobile;
    update[index].email = email;
    SetData([...update])
    clear_Contact()
  }

  const Search_contact = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    const results = Cdata.filter(contact =>
      contact.name.includes(searchValue)
    );

    if (results.length > 0) {
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  }



  return (
    <div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>

        <div>
          <label>Name :-
            <input type="text"className="box" placeholder="Enter Your Name" onChange={(e) => SetName(e.target.value)} value={name}></input>
          </label>
        </div>


        <div>
          <label>Mobile :-
            <input type="text" placeholder="Enter Mobile "className="box" onChange={(e) => SetMobile(e.target.value)} value={mobile}></input>
          </label>
        </div>


        <div>
          <label>Email :-
            <input type="Email" placeholder="Enter Your Email" className="box"onChange={(e) => SetEmail(e.target.value)} value={email}></input>
          </label>&nbsp;
        </div>
        </div>

        <div>
          {
            !update ? <button className="btn btn-danger" onClick={(e) => save_Contact(e)}id="btnsave" >Save</button>
              :  <button className="btn btn-success" onClick={() => update_Contact()}id="btnupdate" >update</button>
            
          }
          <button className="btn btn-primary"id="btnclear" onClick={() => clear_Contact()} >Clear</button>&nbsp;&nbsp;


        </div>

  <input type="text" placeholder="Search by name" value={search} onChange={Search_contact}className="search" />

      {filteredData.length > 0 ? (
        <table className="table table-dark table-striped" >
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Name</td>
              <td>Mobile</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => edit_Contact(item.id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => delete_Contact(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matching contacts found.</p>
      )}

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Mobile</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>
                <button className="btn btn-primary" onClick={() => edit_Contact(item.id)}>Edit</button>&nbsp;
                <button className="btn btn-danger" onClick={() => delete_Contact(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


}

export default Contacts_view;
