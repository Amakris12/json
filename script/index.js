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