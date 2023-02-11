
url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/158329'
//https://emojihub.yurace.pro/api/all
// ,{
//   "method":"GET",
//   "content-type":" application/json; charset=UTF-8"
// }

async function name_smileys() {
  try {
    let value=158361
    for (let i =0;i<=5;i++){ 
   
    url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${value}`
    let data = await fetch(url,{
      "method":"GET",
      "content-type":" application/json; charset=UTF-8"
      
  })
    let data1 = await data.json()
    console.log(value);
    // for (let i of data1) {
       let objectID = data1.objectID
       let accessionYear = data1['accessionYear']
       let dept=data1['department']
//department

       let img_obj=data1['primaryImage']
     // console.log(i)
      console.log(accessionYear)
console.log(data1)
       let eleDiv = document.createElement('div')
      let name_ele = document.createElement('p')
      let year_ele = document.createElement('p')
      let dept_ele=document.createElement('p')
      var img_ele = document.createElement('img')
      img_ele.src = img_obj
      img_ele.setAttribute('height',"600px")
      
  
      name_ele.style.background='blue'
      year_ele.style.background='green'
      dept_ele.style.background='purple'

      dept_ele.innerText = `Place:${dept}`
       name_ele.innerText = `Names:${objectID}`
            year_ele.innerText = `Year:${accessionYear}`
     eleDiv.append(dept_ele) 
      eleDiv.append(name_ele)
       eleDiv.append(year_ele)
       eleDiv.append(img_ele)
      let mainDiv = document.getElementById('smileys')
       mainDiv.append(eleDiv)
       value=value+1;
    }
    // }
  } catch (err) {
    console.log('Error ', err)
    console.log()
  }
}
name_smileys()
