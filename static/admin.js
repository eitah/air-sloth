$(document).ready(initialize);

function toggleNewUser() {
  $('#newUser').toggleClass('invisible');
}

function toggleNewCountry() {
  $('#newCountry').toggleClass('invisible');
}
function toggleNewCity() {
  $('#newCity').toggleClass('invisible');
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
      // window.location.reload(true);
    },
  });
}
function addNewCountry() {
  const name = $('#txtCountryName').val();
  const photos = $('#txtCountryPhotos').val().split(',');
  console.log('photos: ', photos);
  const cities = $('#txtCities').val().split(',');
  const balance = $('#txtCountryBalance').val();

  console.log('add country click is working');
  $.ajax({
    url: '/admin/newCountry',
    method: 'post',
    dataType: 'json',
    data: { name, photos, cities, balance },
    success: (rsp) => {
      console.log('success!! Added new Country!', rsp);
      // window.location.reload(true);
    },
  });
}
function addNewCity() {
  const name = $('#txtCityName').val();
  const photos = $('#txtCityPhotos').val().split(',');
  const cost = $('#txtCost').val();
  const country = $('#txtCountry').val();
  const people = $('#txtPeople').val().split(',');
  const balance = $('#txtCityBalance').val();

  console.log('add city click is working');
  $.ajax({
    url: '/admin/newCity',
    method: 'post',
    dataType: 'json',
    data: { name, photos, cost, country, people, balance },
    success: (rsp) => {
      console.log('success!! Added new city!', rsp);
      // window.location.reload(true);
    },
  });
}


function initialize() {
  $('#btnNew').click(toggleNewUser);
  $('#btnNewCountry').click(toggleNewCountry);
  $('#btnNewCity').click(toggleNewCity);
  $('#btnSubmit').click(addNewUser);
  $('#btnSubmitCountry').click(addNewCountry);
  $('#btnSubmitCity').click(addNewCity);
}
