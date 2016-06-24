$(document).ready(initialize);

function initialize() {
  $('#countryPic').click(toggleCountryDetail);
  $('#btn').click(toggleCityDetail);


function toggleCountryDetail() {
  console.log('test');
  // const name = $('#txtName').val();
  //
  // console.log('add click is working');
  // $.ajax({
  //   url: '/admin/newUser',
  //   method: 'post',
  //   dataType: 'json',
  //   data: { name, photo, age, gender, balance },
  //   success: (rsp) => {
  //     console.log('success!! Added new user!', rsp);
  //   },
  // });
}
