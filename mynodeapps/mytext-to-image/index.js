const textToImage = require('text-to-image')

textToImage.generate('Ramaraju Edagutti is learning.\nGenerating custom images is fun!', {
  debug: true,
  maxWidth: 720,
  customHeight: 60,
  fontSize: 18,
  fontFamily: 'Arial',
  lineHeight: 30,
  margin: 5,
  bgColor: "AliceBlue",
  textColor: "green"
}).then(function (dataUri) {
  console.log(dataUri);
});