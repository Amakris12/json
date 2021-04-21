const cats = {
    "title": "Cat Families",
    "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
    "cat": [
      {
        "name": "Lindy",
        "breed": "Cymric",
        "color": "white",
        "kittens": [
          {
            "name": "Percy",
            "gender": "m"
          },
          {
            "name": "Thea",
            "gender": "f"
          },
          {
            "name": "Annis",
            "gender": "f"
          }
        ]
      },
      {
        "name": "Mina",
        "breed": "Aphrodite Giant",
        "color": "ginger",
        "kittens": [
          {
            "name": "Doris",
            "gender": "f"
          },
          {
            "name": "Pickle",
            "gender": "f"
          },
          {
            "name": "Max",
            "gender": "m"
          }
        ]
      },
      {
        "name": "Antonia",
        "breed": "Ocicat",
        "color": "leopard spotted",
        "kittens": [
          {
            "name": "Bridget",
            "gender": "f"
          },
          {
            "name": "Randolph",
            "gender": "m"
          }
        ]
      }
    ]
  }
  var kitt = JSON.stringify(cats)
  var temp =  JSON.parse(kitt);
  console.log(kitt)
  document.getElementById('head').innerHTML = temp.title;
  document.getElementById('demo').innerHTML = temp.intro;
  document.getElementById('kitty').innerHTML = temp.cat[0].name;
  document.getElementById('kitty1').innerHTML = temp.cat[1].name;
  document.getElementById('kitty2').innerHTML = temp.cat[2].name;
  document.getElementById('kitty3').innerHTML = temp.cat[0].breed;
  document.getElementById('kitty4').innerHTML = temp.cat[1].breed;
  document.getElementById('kitty5').innerHTML = temp.cat[2].breed;
  document.getElementById('kitty6').innerHTML = temp.cat[0].color;
  document.getElementById('kitty7').innerHTML = temp.cat[1].color;
  document.getElementById('kitty8').innerHTML = temp.cat[2].color;
  document.getElementById('kitty9').innerHTML = temp.cat[0].kittens[0].name;
  document.getElementById('kitty10').innerHTML = temp.cat[0].kittens[1].name;
  document.getElementById('kitty11').innerHTML = temp.cat[0].kittens[2].name;
  document.getElementById('kitty12').innerHTML = temp.cat[1].kittens[0].name;
  document.getElementById('kitty13').innerHTML = temp.cat[1].kittens[1].name;
  document.getElementById('kitty14').innerHTML = temp.cat[1].kittens[2].name;
  document.getElementById('kitty15').innerHTML = temp.cat[2].kittens[0].name;
  document.getElementById('kitty16').innerHTML = temp.cat[2].kittens[1].name;
  document.getElementById('kitty17').innerHTML = temp.cat[0].kittens[0].gender;
  document.getElementById('kitty18').innerHTML = temp.cat[0].kittens[1].gender;
  document.getElementById('kitty19').innerHTML = temp.cat[0].kittens[2].gender;
  document.getElementById('kitty20').innerHTML = temp.cat[1].kittens[0].gender;
  document.getElementById('kitty21').innerHTML = temp.cat[1].kittens[1].gender;
  document.getElementById('kitty22').innerHTML = temp.cat[1].kittens[2].gender;
  document.getElementById('kitty23').innerHTML = temp.cat[2].kittens[0].gender;
  document.getElementById('kitty24').innerHTML = temp.cat[2].kittens[1].gender;
  