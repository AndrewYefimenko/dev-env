import './index.css';
/* eslint-disable no-console */
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
  let userBody = '';

  /* Get all users */
  result.forEach(function(user){
    userBody += `<div class="table-row">
        <div class="table-cell"><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></div>
        <div class="table-cell">${user.id}</div>
        <div class="table-cell">${user.firstName}</div>
        <div class="table-cell">${user.lastName}</div>
        <div class="table-cell">${user.email}</div>
      </div>`
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