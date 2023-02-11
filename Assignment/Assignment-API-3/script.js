
url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=50'

async function dogs() {
  try {
    let data = await fetch(url)
    let data1 = await data.json()
    console.log(data1);
    for (let i of data1) {
       let text = i.text
       let user = i.user
       let time=i['createdAt']
      // console.log(text)
      console.log(user)

       let eleDiv = document.createElement('div')
      let text_ele = document.createElement('h2')
      let user_ele = document.createElement('h5')
      let time_ele = document.createElement('p')
      text_ele.style.background='brown'
      user_ele.style.background='pink'
      time_ele.style.background='violet'
      // time_ele.style.color='white'
       text_ele.innerText = `Qoutes from users:${text}`
      
      user_ele.innerText = `User no:${user}`
      time_ele.innerText = `Created on:${time}`
      eleDiv.append(text_ele)
       eleDiv.append(user_ele)
       eleDiv.append(time_ele)
      let mainDiv = document.getElementById('dogs')
       mainDiv.append(eleDiv)

    }
  } catch (err) {
    console.log('Error ', err)
    console.log()
  }
}
dogs()
