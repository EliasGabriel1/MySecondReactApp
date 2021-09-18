<h1> <span>Além de Marte <img width ="30" src="https://image.flaticon.com/icons/png/512/124/124582.png"/></span> <img src="https://shields.io/badge/Alemdemarte-v2.0.0-orange"/></h1>

Esse Projeto começou a alguns meses quando recebi um desafio de uma agência sobre um app em react e uma API, desde então tenho pensando na ideia de fazer uma rede social focada em imagens do mundo e do espaço/universo.

<hr/>

<div>
  <p> O Projeto atual fora feito com as devidas versões:</p>
  </div>
  
  <table>
<tr>
    <td> postcss-icon.material-design </td>
  <td> <a href="https://www.npmjs.com/package/postcss-icon.material-design"> <img src="https://shields.io/badge/version-v0.0.3-white" /></a></td>
  </tr>
  <tr>
    <td>postcss-icon</td>
    <td><a href="https://github.com/retyui/postcss-icon"><img src="https://shields.io/badge/version-v7.1.0-white" /> </a></td>
  </tr>
  <tr>
    <td>@material-ui/core </td>
    <td> <a href="https://www.npmjs.com/package/@material-ui/core"> <img src="https://shields.io/badge/version-v4.12.3-black" /> </a></td>
  </tr>
  <tr>
    <td> Axios</td>
    <td>  <a href="https://www.npmjs.com/package/axios"> <img src="https://shields.io/badge/version-v0.21.4-purple" /></a></td>
  </tr>
  <tr>
    <td>react.js</td>
    <td><a href="https://www.npmjs.com/package/react"><img src="https://shields.io/badge/version-v17.0.2-lightblue" /></a></td>
  </tr>
  <tr>
    <td>Node.js</td>
    <td><a href="https://www.npmjs.com/package/node"> <img src="https://shields.io/badge/version-v16.2.0-green" /></a></td>
  </tr>
  <tr>
    <td>Além de Marte </td>
    <td><a href="https://github.com/EliasGabriel1/MeuAppEmReactJs"><img src="https://shields.io/badge/version-v2.0.0-blue" /></a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/EliasGabriel1"><img src="https://img.icons8.com/clouds/100/000000/github.png" /></a></td>
  </tr>
</table>


O Material UI fora pra reduzir o tempo estruturando Card e alguns componentes que logo será mostrado, o postcss-icon usei alguns icons, em detaque o sino de notificação e axios para ler dados da api.

<hr/>

<h2> A estrura dele ficou desta maneira:</h2>

*No public ficou imagens que foram usadas, e os icons.

*Nos componentes foram separados cada nivel atomico mais abaixo fora feito novas pastas dentro componente, como exemplo para fazer duas caixas de pesquisa com caracteristiicas bem diferentes e com estilização diferentes, faria um input search chamaria em componentes pai e mudaria cada um, utilizando só um componente filho.

*A página de login fora feita no arquivo app.js e o routes fora feito no arquivo index.js mesmo lugar de renderização do react no html.

*Fora usado um context para tirar informações da app.js (login), para levar para a pages>feed.js, através do routes(index.js).

![image](https://user-images.githubusercontent.com/50595684/133872795-ba6a1052-91d6-4f2a-ab0c-5ebefe9e2db6.png)
![image](https://user-images.githubusercontent.com/50595684/133873002-fe718fcc-18ca-4c43-baf1-9315b7d9ffb7.png)


<h2> <img width="45" src="https://img-premium.flaticon.com/png/512/1149/premium/1149887.png?token=exp=1631941831~hmac=f807511924c28428d6362f446abadd86"/> 
  ##O Arquivo Routes fora feito desta maneira:</h2>
  
![image](https://user-images.githubusercontent.com/50595684/133873130-db1fc5f2-b528-4407-bca1-a43588df6738.png)


<small> Obs. o context ja está sendo compartilhado para todas telas. </small>


<h3> App.js</h3>

<h4> Fora instanciado o contexto e jogado para dentro o valor que está no input login como na imagem:</h4>

![aecd3447-0d8a-40f1-91d4-bc78d57d99a3](https://user-images.githubusercontent.com/50595684/133873245-f14bc0ba-3ae9-497a-b7ac-b61c4a8be988.jpg)

![cfe677ad-b8be-470e-b76b-a919b7b6911b](https://user-images.githubusercontent.com/50595684/133873249-e610302d-7ca2-492d-8483-01e411220908.jpg)

![image](https://user-images.githubusercontent.com/50595684/133873256-88a38e9c-629e-4778-962c-f53eb5968664.png)



<h3> Instanciando o context no arquivo auth.js<h3>
  

![08d95fbf-e90e-4859-b14f-ca46f63c3962](https://user-images.githubusercontent.com/50595684/133873292-9ae6f4c1-a8c0-40aa-97f0-72dc5f009ed8.jpg)

  
  <h2> A página de feed *tentei* seguir o estilo milimalista, através da font e do layout: </h2>
  
  
  ![fa45651d-6fe7-4989-91a1-321072993dc2](https://user-images.githubusercontent.com/50595684/133873370-c3d9f6ff-1d91-43ee-9db7-c9e8dbbad0be.jpg)

  
  Nesse ponto dividirei a mini explicação em 3 partes, o aside de clima e noticias, o card do feed, e caixa de notificação(sino).
![image](https://user-images.githubusercontent.com/50595684/133873427-6eb99ce6-55b4-4c5e-8abd-fa60407e7f15.png)![image](https://user-images.githubusercontent.com/50595684/133873457-f97c1203-be31-492a-89ed-ee3bb3933fa0.png)

  
  O sidebar possui um index.js principal, porém os componentes filhos fora dividido em dois, o clima e as noticias:
  ![image](https://user-images.githubusercontent.com/50595684/133873574-a771521c-4bd7-48a5-85ba-7094eb207281.png)

  <h4> CLIMA </h4>
    Aqui ele se alimenta da api, faz o get com o axios, joga para uma constante, que por sua vez da valor ao contexto, e o contexto é adicionado no jsx
  ![CLIMA1](https://user-images.githubusercontent.com/50595684/133873608-1afc4772-c39e-46bd-814b-eedc4559d308.jpg)
  
![CLIMA2](https://user-images.githubusercontent.com/50595684/133873610-75dcbd9e-f5a5-446a-a847-5d962941d575.jpg)

  
  <h4> NEWS</h4>
  
  A news eu fiz diferente, pois ela não irá renderizar uma vez, ela irá renderizar todas noticias da api, então eu uso o map como se fosse  um for para fazer uma nova particula enquanto tiver dados no json e logo jogo para o componente, a ideia fora fazer chegar o mais perto de card possivel.
  
  
  ![13fc9b9d-ea64-4b5e-93f4-7932b429e1d2](https://user-images.githubusercontent.com/50595684/133873703-d2c6462a-73d8-4b0b-bf72-613de587dee6.jpg)

  
![580c590c-6095-4a1e-9636-50ea4bd5cbb0](https://user-images.githubusercontent.com/50595684/133873706-1d7b8877-c402-496a-8de4-f6bea09ecc36.jpg)

  
  ![image](https://user-images.githubusercontent.com/50595684/133873716-a4a06758-e289-4a9d-94a8-4f15c8243c89.png)

  
  E por fim o card
  
  ![image](https://user-images.githubusercontent.com/50595684/133873744-6009a72a-3818-4c1e-abe1-870c52709cda.png)

  Fiz um componente só, pois ele já vem pronto do <a href="https://mui.com/pt/">Material UI  <img width ="45" src="https://material-ui.com/static/logo.png"></a> 
  
  
  
  ![image](https://user-images.githubusercontent.com/50595684/133873756-7869a839-c834-4a64-bcca-65f91889ba73.png)

  
  E por ultimo o dropdown da notificação, fiz padrão como se fosse html e css, no hover do icon aparecer uma div embaixo desta,
  
  ![image](https://user-images.githubusercontent.com/50595684/133873887-ab496371-625f-4f8f-9382-b53805619cf7.png)
  
  Componente filho, ficou bem simples pois não utilizei api para receber os dados de curtida, em uma das fases penso em estruturar uma api de forma que encaixe com o projeto.
  
  ![image](https://user-images.githubusercontent.com/50595684/133873915-c46ffee5-6dd0-4883-8a58-7c14119576fa.png)

  
  Componente pai do dropdown de noticias
  
  ![image](https://user-images.githubusercontent.com/50595684/133873936-7481fac1-d33c-4a86-93b3-accbdd121769.png)

E por ultimo, o header, aonde está o icon e o dropdown, a logo e o nome do usuario:
  
  Reuni todos componentes aqui na main
  
  ![image](https://user-images.githubusercontent.com/50595684/133873980-be3d0879-9a67-4fad-a74f-feff0f873a8d.png)

Todo o grupo de compontentes do canto do header fora posto aqui, o nome de usuario, caixa de notificação, icon...  
  ![image](https://user-images.githubusercontent.com/50595684/133873959-89e11f42-f57e-422c-9d68-31c35d864039.png)
  E como podemos observar o context que saiu do login, fora jogado pro auth e pro routes, fora colocado numa variavel para ser usado no name de usuario.
  
  
  
  O react é lib muito interessante, esperava gostar menos e me impresisonei de como gostei de utilizar esta lib, pretendo continuar tentando utilizar ela mais, até entender como funciona realmente, a única coisa que não achei interessante é a necessidade de utilizar alguns componentes com <> sem tag para não acumular tag como esta:
  
  ![image](https://user-images.githubusercontent.com/50595684/133874046-218c7e0b-5142-48a3-b2b0-4e660bb66e03.png)
  
  Cheio de div sem nenhuma classe, pois não se utiliza para NENHUMA estilização, o html não fica tão bonito assim, assim se segue como ponto de melhoria.


