// wether_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9e563408b68cf4faf5e8aff6b3bde4b`

global_parent = document.querySelector('.parent')

countries_api = 'https://restcountries.com/v2/all'

// 'GET', 'POST' , 'PUT' , 'DELETE'

output = fetch(countries_api,{
    "method":"GET",
    "content-type":" application/json; charset=UTF-8"
})


console.log(output);

output
.then((res)=>{
    console.log(res) // response
    out = res.json() // promise have to resolve this to fetch thre response
    return out
})
    .then((res)=>{
        console.log(res)
        // console.log(JSON.stringify(res[0]))
        fulllat = []
        fulllongi = []
        for(let i of res){

            fulllat.push(i['latlng'])
            let name=i[`name`]
            var img_flag = i['flags']['svg']
            var capital = i['capital']
            var region = i['region']
          // let alpha3Code=i[`alpha3Code`]
            
            var parent_flat_data = document.createElement('div')
 parent_flat_data.style.background=`#645a56`
 parent_flat_data.style.color=`white`
 parent_flat_data.style.border=`1px solid white`
            // creating image
            var img_ele = document.createElement('img')
            img_ele.src = img_flag
            img_ele.setAttribute('height',"50px")
            parent_flat_data.append(img_ele)

            // add caplital & region
            let name_ele=document.createElement('p')
            var capital_ele = document.createElement('p')
            var region_ele = document.createElement('p')
            let code_no=document.createElement(`p`)
            //var wether_ele = document.createElement('p')
            name_ele.innerText = ` ${name} `
            capital_ele.innerText = `Capital: ${capital}`
            region_ele.innerText = `Region: ${region}`
            //code_no.innerTtext=`Country Code:${alpha3Code}`
            parent_flat_data.append(name_ele)
            parent_flat_data.append(capital_ele)
            parent_flat_data.append(region_ele)
            //parent_flat_data.append(code_no)
            
            if(capital){

            // res[0]['latlng']
                var lat
                var lang
                try{
                    [lat,lang] = i['latlng']
                    parent_flat_data.setAttribute('lat',lat)
                    parent_flat_data.setAttribute('lang',lang)
                    console.log('latitude is',lat);
                    console.log('longitude is',lang);
                }
                catch{
                    console.log('this capital is not having lat & lang');
                    console.log(capital);
                }
                
                // adding button
                var button_ele = document.createElement('button')
                button_ele.innerText = 'Weather Data'
                button_ele.style.background=`#645a56`
                button_ele.style.color=`white`
                button_ele.classList.add("weather_class")
                button_ele.setAttribute('onclick','weather_fun(this)')

                parent_flat_data.append(button_ele)
                

                parent_flat_data.style.border = '2px solid white'
                parent_flat_data.style.margin = '10px'
                parent_flat_data.style.padding = '10px'
                global_parent.append(parent_flat_data)
              

                console.log('flagg',img_flag);
            }

            // break
        }
        console.log(JSON.stringify(fulllat));
        // console.log(res[0]);
        // console.log(JSON.stringify(res[0]['latlng']))
        // console.log(res[0]['latlng']);
        // [lat,lon] = res[0]['latlng']
        // console.log('lat',lat);
        // console.log('lon',lon);
        // wether_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9e563408b68cf4faf5e8aff6b3bde4b`
        // console.log(wether_api);
        // output2 = fetch(wether_api)
        // output2
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res)
        //     console.log(res['weather'][0])
        // })
    })

// var btn_weather = document.querySelector('')

// function  weather_fun(e){
//     console.log(e);
//     var parent = e.parentElement
//     var lat = parent.getAttribute('lat')
//     var lang = parent.getAttribute('lang')
//     wether_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=b9e563408b68cf4faf5e8aff6b3bde4b`
//         console.log(wether_api);
//         output2 = fetch(wether_api)
//         output2
//         .then((res)=>res.json())
//         .then((res)=>{
//             // console.log(res)
//             console.log('weather data');
//             console.log(res['weather'][0])
//             document.querySelector('.modal-body p').innerText = res['weather'][0]['description']
//             document.querySelector('.modal').style.display = 'block'
//             // alert(res['weather'][0]['description'])
//         })
//     console.log(parent);

//     console.log('button pressed');
//     console.log(lat);
//     console.log(lang);
// }

async function  weather_fun(e){
    console.log(e);
    var parent = e.parentElement
    var lat = parent.getAttribute('lat')
    var lang = parent.getAttribute('lang')
    wether_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=b9e563408b68cf4faf5e8aff6b3bde4b`
    console.log(wether_api);
    output1 = await fetch(wether_api)
    res = await output1.json()
    // output2 = await fetch(url)
    // res2 = await output2.json()
    console.log(res);
    // document.querySelector('.modal-body p').innerText = res['weather'][0]['description']
    document.querySelector('#wether-data').innerText = res['weather'][0]['description']
    document.querySelector('.pop-up').style.display = 'block'
    // document.querySelector('.modal').style.display = 'block'
    console.log(parent);

    console.log('button pressed');
    console.log(lat);
    console.log(lang);
}

function btn_close(){
    // document.querySelector('.modal').style.display = 'none'
    document.querySelector('.pop-up').style.display = 'none'
}

// function rand_color(){
//     var r = parseInt(Math.random()*255)
//     var g = parseInt(Math.random()*255)
//     var b = parseInt(Math.random()*255)
//     return `rgb(${r},${g},${b})`
// }

// var btn_click = document.querySelector('.btn-color')
// btn_click.addEventListener('click',()=>{
//     console.log('click');
//     document.body.style.backgroundColor = rand_color()
// })

// var btn_click = document.querySelector('.btn-color')
// btn_click.addEventListener('click',()=>{
//     console.log('click');
//     document.body.style.backgroundColor = rand_color()
// })

// var any_async3 = async ()=>{
