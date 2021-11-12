## Introdução
<br>
Sejam bem vindos ao tutorial de hover personalizados para iniciantes em CSS, eu sou o **Marcelo Alves** e vou compartilhar alguns efeitos bem legais para se usar em seus projetos Web.
<br>
<br>
Este repositório contem um arquivo html e css que usarei para criar os efeitos, caso queira utilizar para acompanhar o tutorial basta fazer o clone do repositório em sua maquina, ou acompanhar o seguinte raciocínio.
<br>
<br>
<a href="/images/visualdicas_logo.png" download="teste_visualdicas">Clique aqui </a>
<a href="https://res.cloudinary.com/dkjm6gj24/image/upload/v1627940651/Youtube%20Channel/Hover%20Effects/pixel_qwmcwc.png" target="_blank" download="pixel">Baixar imagem</a>

#
HTML code
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--font-family-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&display=swap" rel="stylesheet">
  <!--link css styles-->
  <link rel="stylesheet" href="index.css">
  <!--title-->
  <title>Efeitos Hover Personalizados</title>
</head>
<body>
  <h1 class="title">Hover Effects</h1>
  <div class="container">
    <a class="button item1">Button 1</a>
    <a class="button item2">Button 2</a>
    <a class="button item3">Button 3</a>
    <a class="button item4">Button 4</a>
    <a class="button item5">Button 5</a>
    <a class="button item6">Button 6</a>

    <a class="button-inter item7">Button 1</a>
    <a class="button-inter item8"><span>Button 2</span></a>
    <a class="button-inter item9"><span></span><span></span><span></span><span></span>Button 3</a>
  </div>
</body>
</html>
  ```

#  
CSS code
```css
*,
*::before,
*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  background: #323232;
}

.title{  
  margin: 5%;

  font-family: 'Arial';
  font-weight: 300;

  color: white;
  letter-spacing: .04em;
}

.container{
  width: 700px;
  height: auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  margin: 5%; 
}
```
#

### Conteúdo em vídeo.


<a href="https://www.youtube.com/watch?v=EZNc4yRQeK0">Ir para o vídeo tutorial</a>

