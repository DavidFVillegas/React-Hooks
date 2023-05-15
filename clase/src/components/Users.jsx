import { useState, useEffect } from "react";
import '../App.css';


const Users = () => {
  const [Users, setUsers] = useState([]);

  // En función flecha así se escribe la asincronía

  // Siempre colocamos async y luego await
  const mostrarUsers = async () => {
    // El fetch va a extraer información de una ruta url
    // res significa respuesta(response)
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
    console.log(Users);
  };
  // Tenemos que evitar que se reproduza de manera infinita
  // useEffect es un hook de react que recibe 2 parametros una función flecha y unos corchetes
  useEffect(() => {
    mostrarUsers();
  }, []);

  // mostrarUsers();
  // console.log(Users)

  /*

  // En función normal(funcion regular) así se escribe la asincronía

  async function consultarUsers() {

  }
  */

  return (
      <div>
        {Users.map((User) => (
          <section key={User.id} className="userCard">
            <h1 className="name">{User.name}</h1>
            <p className="username">{User.username}</p>
            <p className="email">{User.email}</p>
            <div className="address">
              <p>{User.address.street}</p>
              <p>{User.address.suite}</p>
              <p>{User.address.city}</p>
              <p>{User.address.zipcode}</p>
            </div>
            <div className="geo">
              <p>{User.address.geo.lat}</p>
              <p>{User.address.geo.lng}</p>
            </div>
          </section>
        ))}
      </div>
    );
 
  
};

export default Users;
