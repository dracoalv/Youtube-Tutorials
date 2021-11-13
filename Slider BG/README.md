## Introdução
<br>

Neste tutorial eu irei mostrar uma possibilidade de criar um Plano de fundo deslizante (SLIDE Background) usando apenas HTML & CSS.
<br>

Aqui abaixo você encontra o processo que utilizei para criar o Slider. Caso você queira acompanhar o desenvolvimento deste slide através do vídeo do meu canal no Youtube,
basta copiar e colar a estrutura HTML e CSS iniciais que utilizei para tematizar o slider. (Não se preocupe, no vídeo eu explico linha por linha)

#
HTML code
```html
  <div class="container">
    <header class="header">
      <a href="#" id="logo">LOGOTIPO</a>
      <nav>
        <ul class="header-ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>    
  </div>
  ```

#  
CSS code
```css
  /* =========== */
/* resets globais */ 
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color: #313131;
}

img{
  max-width: 100%;
}

/* =========== */
/* layout global*/
#logo{
  font-size: 21px;
  font-weight: bold;
}

.container{
  width: 1000px;
  margin: 0 auto;
}

.header{
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-ul{
  display: flex;
  gap: 50px;
}
```

#

### Conteúdo em vídeo.

<a href="">Ir para o vídeo tutorial</a>
