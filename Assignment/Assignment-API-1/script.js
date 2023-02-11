
url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10'

async function name_cat() {
  try {
    let data = await fetch(url)
    let data1 = await data.json()
    console.log(data1);
    for (let i of data1) {
       let text = i.text
       let user = i.user
      // console.log(text)
      console.log(user)

       let eleDiv = document.createElement('div')
      let text_ele = document.createElement('p')
      let user_ele = document.createElement('p')
      text_ele.style.background='orange'
      user_ele.style.background='yellow'
       text_ele.innerText = `Qoutes:${text}`
      
      user_ele.innerText = `User no:${user}`
      eleDiv.append(text_ele)
       eleDiv.append(user_ele)
      let mainDiv = document.getElementById('cats')
       mainDiv.append(eleDiv)

    }
  } catch (err) {
    console.log('Error ', err)
    console.log()
  }
}
name_cat()
