import './index.css';
/* eslint-disable no-console */
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
  let userBody = '';

  /* Get all users */
  result.forEach(function(user){
    userBody += `<tr>
                     <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
                     <td>${user.id}</td>
                     <td>${user.firstName}</td>
                     <td>${user.lastName}</td>
                     <td>${user.email}</td>
                 </tr>`
  });
  global.document.getElementById('users').innerHTML = userBody;

  /* Delete user */
  const deleteUserLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteUserLinks, link => {
    link.onclick = function(event) {
      event.preventDefault();
      const element = event.target;
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });

});