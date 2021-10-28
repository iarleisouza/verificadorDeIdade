function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}else{
  //  window.alert('Dados ok!') //validar os dados 
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
 // res.innerHTML = `Idade calculada: ${idade}` // validar os dados  testar aos poucos para ver se o código esta sendo validado.
  var genero = ''
  var img = document.createElement('img') // cria o elemento img
  img.setAttribute('id', 'foto') // atribui o id para o elemento img criado anteriormente com nome foto
  if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10){
          //criança
          img.setAttribute('src', 'img/crianca-menino.png')// atribui a foto para o elemento img
      }else if (idade < 21){
          //jovem
          img.setAttribute('src', 'img/adolescente-homem.png')// atribui a foto para o elemento img
      }else if ( idade < 50){
          //Adulto
          img.setAttribute('src', 'img/man.png')// atribui a foto para o elemento img
      }else {
          //Idoso
          img.setAttribute('src', 'img/idoso.png')// atribui a foto para o elemento img
      }
     }
      else if (fsex[1].checked){
          genero = 'Mulher'
          if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'img/crianca-menina.png')// atribui a foto para o elemento img
        }else if (idade < 21){
            //jovem
            img.setAttribute('src', 'img/adolescente-mulher.png') // atribui a foto para o elemento img
        }else if ( idade < 50){
            //Adulto
            img.setAttribute('src', 'img/woman.png') // atribui a foto para o elemento img
        }else {
            //Idoso
            img.setAttribute('src', 'img/idosa.png') // atribui a foto para o elemento img
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img) //adicionaar o elemento img 

  }
}


