$(document).ready(initialize);

function initialize() {
  $('#myCountryCarousel .item').first().addClass("active");
  $('.countrySelect').click(toggleCountryDetail);
  $('#city').hide();
  $('#cityDetails').hide();
  $('#PurchaseOptions').hide();
  $('#countryDetails').hide();
  $('#PurchaseConfirmation').hide();

//  6aa6c8629bf8b96b131d6c10c0fbc794  $('#btn').click(toggleCityDetail);
};

const APPID='6aa6c8629bf8b96b131d6c10c0fbc794';
var person={};
var CitiesinCountry={};
const userid=$('#person')[0].attributes['personid'].value.replace(/"/g,"");

function toggleCityDetail() {
          const selectedcity=this.attributes['data-city-name'].value;
          var weatherURL='http://api.openweathermap.org/data/2.5/weather?q=' + selectedcity + '&APPID=' + APPID;
      // Get weather details
            $.ajax({
              url: weatherURL,
              method: 'get',
              dataType: 'json',
              data: {},
              success: (rsp) => {
              $('#currentweather h3:nth-child(1)').text('Current Weather:'+ rsp.weather[0].main);
              $('#currentweather h3:nth-child(2)').text('Current temperature (Fahrenheit):'+ Math.round(1.8 * (rsp.main.temp - 273) + 32));
              $('#currentweather h3:nth-child(3)').text('Current humidity:'+ rsp.main.humidity);

              }
      });
      const cityofInterest=CitiesinCountry.find(c => c.name=== selectedcity );
      var newBalance= 0;
      $('#PurchaseOptions h3:nth-child(1)').text('Your Current Balance:'+ person.balance);
      $('#PurchaseOptions h3:nth-child(2)').text('Cost to visit this City:'+ cityofInterest.costToVisit);
      if (person.balance <= cityofInterest.costToVisit){
               $('#PurchaseOptions h3:nth-child(3)').text('You do not have sufficient funds');
            }
            else {
              newBalance=person.balance - cityofInterest.costToVisit;
              $('#PurchaseOptions h3:nth-child(3)').text('Your new balance is:'+ newBalance);
            }

      $('#cityDetails').show();
      $('#PurchaseOptions').show();
      $('#btnConfirmBuy').click(UpdateBuy);


      function UpdateBuy(){
          const userid=$('#person')[0].attributes['personid'].value.replace(/"/g,"");
         const city2buy=cityofInterest.name;
         const city2buyCost=cityofInterest.costToVisit;
         const country2update=cityofInterest.country;
          console.log('Personbalance' , person)
          console.log('newbalance' , newBalance, cityofInterest)
          $.ajax({
            url: '/user/'+ userid +'/confirmBuy',
            method: 'post',
            dataType: 'json',
            data: { userid, city2buy, city2buyCost, country2update},
            success: (rsp) => {
              console.log('success!! Confirmed purchase!', rsp);
              $('#btnConfirmBuy').hide();
              $('#PurchaseConfirmation').show();
              },
          });
      };


};

function toggleCountryDetail() {
  $(this).stop();

  const userid=$('#person')[0].attributes['personid'].value.replace(/"/g,"");
  const id=this.attributes.value.value;
  const country=this.attributes['data-country-name'].value;

  $.ajax({
    url: '/user/'+ userid + '/'+ country +'/getcities',
    method: 'get',
    dataType: 'json',
    data: { id, country },
    success: (rsp) => {
      console.log('Got successful responser!', rsp);
      person=rsp.person;
      CitiesinCountry=rsp.CitiesinCountry;
      var fLen = rsp.CitiesinCountry.length;
      var itemsHtml = '';
      for (i = 0; i < fLen; i++) {
        var  text = "<h2>" + rsp.CitiesinCountry[i].name + "</h2>";
            $('#city h2').append(text);
          const  detail = "<p>" + rsp.CitiesinCountry[i].balance + "</p>";
          var city=rsp.CitiesinCountry[i];
            var img = '<img height="600px" width="800px" src="'+city.photos[0]+'" value="'+ city._id + '" alt="'+ city.name +'">'
            var carouselcaption = '<div class="carousel-caption">   <h1>'+ city.name    +'</h1> </div>'
        var anchor = '<div class="item"><a class="citySelect" value=' + city._id + ' data-city-name=' + city.name + ' id= "cityPic1" data-toggle= "collapse" data-target="#cityDetails">'+img+'</a>' + carouselcaption+'</div>'
            itemsHtml = itemsHtml + anchor;
      }


    $('#city .carousel-inner').html(itemsHtml);
   $('#city .item').first().addClass("active");
   $('#city').show();
   $('#countryDetails h3').text('You have selected to visit:     '+ country);
   $('#countryDetails').show();
     $('.citySelect').click(toggleCityDetail);
     $('#myCountryCarousel').carousel('pause');
     $('#Countriesheader').hide();
    },
  });

};
