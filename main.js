//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${choice}&api_key=9odCJxxMQMWR2MedFaHWt1mCbYsJJGe7wIf4b3Rq`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.photos[0])
        document.querySelector('h2').innerText = data.photos[0].rover.name
        document.querySelector('img').src = data.photos[0].img_src
        document.querySelector('h3').innerText = data.photos[0].earth_date
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}