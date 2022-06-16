import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  houses: [
    {bedrooms: 5, bathrooms: 3, levels: 2, imgUrl: 'https://s3-us-west-2.amazonaws.com/prod.monsterhouseplans.com/uploads/images_plans/52/52-113/52-113e.jpg', year: 2020, price: 650000, description: 'Immaculate'}
  ],
  jobs: [
    {company: 'Streak-Free', imgUrl: 'https://www.smartservice.com/wp-content/uploads/2019/05/05-07-19-window-cleaning-salary.png', jobTitle: 'Window Cleaner', hours: 40, rate: 20, description: 'If you think the glass door is open when you try to run through when its not, then our job is done.'}
  ],
  cars: [
    // NOTE fake data until you get data
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."},
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."},
    // {make: 'honda', model: 'car', year: 2022, price: 50000, img: 'https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2020/12/21-accord-hybrid.jpg', color: '#fff', description: "it's a car yo, buy it.  I could really use the money to buy gas."}
  ]
})
