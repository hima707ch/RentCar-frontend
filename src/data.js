const data = [
  {
    imgUrl:
      "https://imgd.aeplcdn.com//642x361//n/cw/ec/96269/left-front-three-quarter6.jpeg?wm=1&q=75",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://www.autodeal.com.ph/custom/car-model-photo/original/2022-toyota-rav4-hev-philippines-620cce0370b1b.jpg",
    name: "Toyota RAV 4",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 540
  },
  {
    imgUrl:
      "https://res.cloudinary.com/caradvice/image/private/q_auto/v1578963644/m863hvis1n1l5uhsjuot.jpg",
    name: "Volkasvagon T-cross",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 400
  },
  {
    imgUrl:
      "https://editorials.autotrader.ca/media/194316/2021-cadillac-escalade-esv-premium-luxury-platinum-01-dw.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132614712775470000",
    name: "Cadillac Escalade",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "7.1km/1-liter",
    auto: "Automatic",
    price: 630
  },
  {
    imgUrl:
      "https://images.hindustantimes.com/auto/img/2021/06/10/1600x900/20210610_01_03_s_1623294341873_1623294347216.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://www.topgear.com/sites/default/files/images/news-article/2020/09/773a5387e619ab48f7b768bcbed99f32/p90400385_highres.jpg",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://cdn.motor1.com/images/mgl/8AAvyJ/s3/2023-rolls-royce-phantom.jpg",
    name: "Rolls-Royce Phantom",
    year: "2023",
    person: 4,
    fuel: "Gasoline",
    avrage: "8.1km/1-liter",
    auto: "Manual",
    price: 900
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:"https://static.toiimg.com/photo/msid-93796909/93796909.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47871/bmw-3-series-exterior3.jpeg?wm=0",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://stat.overdrive.in/wp-content/uploads/2022/05/P90462503_highRes_the-new-bmw-3-series.jpg",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
    name: "Hyundai Creta",
    year: "2022",
    person: 5,
    fuel: "petrol",
    avrage: "5.2km/1-liter",
    auto: "Manual",
    price: 620
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:"https://gaadiwaadi.com/wp-content/uploads/2021/03/New-gen-Toyota-Land-Cruiser-300.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47871/bmw-3-series-exterior3.jpeg?wm=0",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com//642x361//n/cw/ec/96269/left-front-three-quarter6.jpeg?wm=1&q=75",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://www.autodeal.com.ph/custom/car-model-photo/original/2022-toyota-rav4-hev-philippines-620cce0370b1b.jpg",
    name: "Toyota RAV 4",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 540
  },
  {
    imgUrl:
      "https://res.cloudinary.com/caradvice/image/private/q_auto/v1578963644/m863hvis1n1l5uhsjuot.jpg",
    name: "Volkasvagon T-cross",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 400
  },
  {
    imgUrl:
      "https://editorials.autotrader.ca/media/194316/2021-cadillac-escalade-esv-premium-luxury-platinum-01-dw.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132614712775470000",
    name: "Cadillac Escalade",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "7.1km/1-liter",
    auto: "Automatic",
    price: 630
  },
  {
    imgUrl:
      "https://images.hindustantimes.com/auto/img/2021/06/10/1600x900/20210610_01_03_s_1623294341873_1623294347216.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47871/bmw-3-series-exterior3.jpeg?wm=0",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://cdn.motor1.com/images/mgl/8AAvyJ/s3/2023-rolls-royce-phantom.jpg",
    name: "Rolls-Royce Phantom",
    year: "2023",
    person: 4,
    fuel: "Gasoline",
    avrage: "8.1km/1-liter",
    auto: "Manual",
    price: 900
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://stat.overdrive.in/wp-content/uploads/2022/05/P90462503_highRes_the-new-bmw-3-series.jpg",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
    name: "Hyundai Creta",
    year: "2022",
    person: 5,
    fuel: "petrol",
    avrage: "5.2km/1-liter",
    auto: "Manual",
    price: 620
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:
      "https://images.hindustantimes.com/auto/img/2021/06/10/1600x900/20210610_01_03_s_1623294341873_1623294347216.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://www.topgear.com/sites/default/files/images/news-article/2020/09/773a5387e619ab48f7b768bcbed99f32/p90400385_highres.jpg",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://stat.overdrive.in/wp-content/uploads/2022/05/P90462503_highRes_the-new-bmw-3-series.jpg",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
    name: "Hyundai Creta",
    year: "2022",
    person: 5,
    fuel: "petrol",
    avrage: "5.2km/1-liter",
    auto: "Manual",
    price: 620
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://stat.overdrive.in/wp-content/uploads/2022/05/P90462503_highRes_the-new-bmw-3-series.jpg",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
    name: "Hyundai Creta",
    year: "2022",
    person: 5,
    fuel: "petrol",
    avrage: "5.2km/1-liter",
    auto: "Manual",
    price: 620
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:"https://static.toiimg.com/photo/msid-93796909/93796909.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47871/bmw-3-series-exterior3.jpeg?wm=0",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://stat.overdrive.in/wp-content/uploads/2022/05/P90462503_highRes_the-new-bmw-3-series.jpg",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:
      "https://res.cloudinary.com/caradvice/image/private/q_auto/v1578963644/m863hvis1n1l5uhsjuot.jpg",
    name: "Volkasvagon T-cross",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 400
  },
  {
    imgUrl:
      "https://editorials.autotrader.ca/media/194316/2021-cadillac-escalade-esv-premium-luxury-platinum-01-dw.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132614712775470000",
    name: "Cadillac Escalade",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "7.1km/1-liter",
    auto: "Automatic",
    price: 630
  },
  {
    imgUrl:"https://gaadiwaadi.com/wp-content/uploads/2021/03/New-gen-Toyota-Land-Cruiser-300.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47871/bmw-3-series-exterior3.jpeg?wm=0",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:"https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/10571/1689673096346/front-left-side-47.jpg",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://cdn.motor1.com/images/mgl/8AAvyJ/s3/2023-rolls-royce-phantom.jpg",
    name: "Rolls-Royce Phantom",
    year: "2023",
    person: 4,
    fuel: "Gasoline",
    avrage: "8.1km/1-liter",
    auto: "Manual",
    price: 900
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220413030454_BMW%20X7%20facelift%201.jpg&w=700&q=90&c=1",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com//642x361//n/cw/ec/96269/left-front-three-quarter6.jpeg?wm=1&q=75",
    name: "BMW 3 Series",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "4.1km/1-liter",
    auto: "Auto",
    price: 340
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
    name: "Hyundai Creta",
    year: "2022",
    person: 5,
    fuel: "petrol",
    avrage: "5.2km/1-liter",
    auto: "Manual",
    price: 620
  },
  {
    imgUrl:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221004191046/Hyundai-Venue-2022.jpg",
    name: "Hyundai Venue",
    year: "2020",
    person: 4,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Manual",
    price: 440
  },
  {
    imgUrl:
      "https://images.hindustantimes.com/auto/img/2021/06/10/1600x900/20210610_01_03_s_1623294341873_1623294347216.jpg",
    name: "Toyota Land Cruiser 300",
    year: "2020",
    person: 4,
    fuel: "Gasoline",
    avrage: "5.8km/1-liter",
    auto: "Automatic",
    price: 7000
  },
  {
    imgUrl:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/47871/bmw-3-series-exterior3.jpeg?wm=0",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X7/10571/1689673096346/front-left-side-47.jpg?tr=w-456",
    name: "BMW X7",
    year: "2019",
    person: 4,
    fuel: "Deisel",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 600
  },
  {
    imgUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg",
    name: "Hyundai Creta",
    year: "2022",
    person: 5,
    fuel: "petrol",
    avrage: "5.2km/1-liter",
    auto: "Manual",
    price: 620
  },
  {
    imgUrl: "https://www.topgear.com/sites/default/files/images/news-article/2020/09/773a5387e619ab48f7b768bcbed99f32/p90400385_highres.jpg",
    name: "BMW 4 Series",
    year: "2023",
    person: 2,
    fuel: "petrol",
    avrage: "6.1km/1-liter",
    auto: "Automatic",
    price: 740
  }
];

export default data;
