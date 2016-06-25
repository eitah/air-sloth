$(document).ready(initialize);

function toggleNewUser() {
  console.log('button is being clicked');
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
      window.location.reload(true);
    },
  });
}

function initialize() {
  console.log('buttons are initializes');
  $('#btnNew').click(toggleNewUser);
  $('#btnSubmit').click(addNewUser);
}
