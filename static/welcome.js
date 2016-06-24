$(document).ready(initialize);

function toggleNewUser() {
  $('#newUser').toggleClass('invisible');
}

function addNewUser() {
  const name = $('#txtName').val();
  const photo = $('#txtPhoto').val();
  const age = $('#txtAge').val();
  const gender = $('#txtGender').val();
  const balance = $('#txtBalance').val();

  console.log('add click is working');
  $.ajax({
    url: '/admin/newUser',
    method: 'post',
    dataType: 'json',
    data: { name, photo, age, gender, balance },
    success: (rsp) => {
      console.log('success!! Added new user!', rsp);
    },
  });
}


function initialize() {
  $('#btnNew').click(toggleNewUser);
  $('#btnSubmit').click(addNewUser);
}