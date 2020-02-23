'use strict';

const state={
    input:''
}

function getDogImage() {
  fetch(`https://dog.ceo/api/breed/${state.input.toLowerCase()}/images/random/1`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(`Looks like that one's not on the list boss, try another`));
}

function displayResults(responseJson) {
  console.log(responseJson);
  let dispImg=responseJson.message.reduce((acc,val)=>{
    return acc += `<img src="${val}">`
  },``)
  $('.dogPics').html(dispImg)
}

function handleValChange() {
    $('#breedVal').change(e=> {
      state.input=e.target.value
      // console.log(state.input)
    })
}

function watchForm() {
  $('form').submit(e => {
    e.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  handleValChange();
  watchForm();
});