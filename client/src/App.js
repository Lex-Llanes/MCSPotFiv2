/*
INSTALLS
npm instasll bootstrap
npm install react-bootstrap
npm install spotify-web-api-node --save
npm install react-spotify-web-playback
npm install react-router-dom@6
*/


import './App.css';
import { React, useState, useEffect } from "react"
import { Nav, Navbar } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { isTrivialHref } from '@restart/ui/esm/Anchor';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
/******************************************************************************************************/
//Component Imports//
import Login from './components/login';
import Dashboard from './components/dashboard';
import NavigationBar from './components/navigationbar';
import CarouselComp from './components/carouselcomponents/carousel';
import BlogForm from './components/blogcomponents/blogform';
import BlogPage from './components/blogpage';
/******************************************************************************************************/

//IGNORE
//const code = new URLSearchParams(window.location.search).get("code")

function App() {

  const [code, setCode] = useState("")

  
  useEffect(()=>{
    const newCode = new URLSearchParams(window.location.search).get("code")
    setCode(newCode)
  },[code])


  return (
    <div>
      <div className="navbar">
        <NavigationBar code={code} setCode={setCode}/>
      </div>
      
      <div className="contentbody">
      <BrowserRouter>
        <Routes>
            <Route exact path= "/" />
            <Route path="/blogpage"/>
            <Route path="/usersblog"/>
            <Route path="/searchblog"/>
            <Route/>
            <Route/>
            <Route/>
            <Route/>
        </Routes>
      </BrowserRouter>



      {/*!! MAYBE MAKE LINKS - Make Carousel-comp be Main Page and Dashboard-comp be the blog form page !!*/}
      {/* SUCCESS */}
      {code ? <Dashboard code={code} /> : <CarouselComp/>}

      </div>




      <BrowserRouter>
        <Routes>
            <Route exact path= "/" element={<CarouselComp/>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
      </BrowserRouter>

    </div>



  )

}

export default App


//TESTIONG FONTS//
Cupcake Ipsum
Jelly-o gummi bears wafer. Oat cake cupcake bonbon toffee. Jelly tiramisu gummi bears jelly beans dragée dragée cupcake fruitcake. Jelly beans pastry toffee halvah caramels. Jujubes chocolate cake croissant powder marshmallow lemon drops jujubes gingerbread gingerbread. Gummi bears macaroon ice cream jujubes gingerbread sesame snaps sweet tootsie roll. Toffee candy donut chupa chups sugar plum liquorice muffin tiramisu. Jujubes icing croissant sweet gummi bears jelly beans gummies liquorice. Sweet roll fruitcake candy gummies marshmallow. Sweet roll topping pastry oat cake chocolate cake. Oat cake jelly beans marshmallow jelly-o. Bear claw chocolate carrot cake chocolate cake marzipan pastry chocolate danish gummies. Sweet roll topping marshmallow.

Wafer icing cotton candy oat cake. Toffee muffin jelly jelly beans toffee. Tart topping tiramisu tiramisu jelly. Danish chocolate chupa chups ice cream tootsie roll topping chocolate. Sesame snaps jelly topping tiramisu gummi bears. Cheesecake marzipan bonbon lemon drops. Wafer macaroon donut macaroon pudding pudding cupcake. Pie candy icing pastry fruitcake biscuit jelly beans chupa chups jelly. Powder cookie liquorice danish chocolate. Soufflé lemon drops jelly beans tart wafer. Bear claw tiramisu muffin jelly-o donut cake. Cupcake macaroon pudding halvah pudding tootsie roll cupcake. Cake cake jelly tart biscuit biscuit wafer icing. Macaroon cupcake cake cupcake tart brownie.

// Cupcake brownie halvah gingerbread gingerbread brownie danish muffin. Caramels gummi bears pie. Sugar plum sweet roll chocolate gingerbread jelly halvah muffin. Marzipan macaroon bonbon gummies cake gummies lemon drops. Soufflé bonbon cake. Sweet roll marzipan cake tootsie roll sweet. Sweet tart marzipan candy carrot cake topping. Pudding pudding gummies bonbon icing chupa chups. Icing jelly-o dragée. Cupcake soufflé cheesecake jelly beans. Sesame snaps gummi bears bonbon pie tiramisu. Cupcake carrot cake danish. Biscuit gummi bears croissant jujubes.

// Cheesecake cotton candy topping cheesecake icing. Ice cream biscuit marshmallow cake cake. Soufflé jelly-o apple pie tootsie roll. Pudding jelly-o sugar plum gummies powder. Gummi bears cookie candy lemon drops chocolate cake lollipop gummies donut. Chocolate bar cookie lemon drops donut. Macaroon marshmallow sweet roll chupa chups jelly-o candy canes jelly donut. Marshmallow carrot cake lollipop. Icing ice cream pie marshmallow gummi bears powder sugar plum sweet roll gummies. Wafer jujubes tart jelly. Gummies halvah powder ice cream cupcake toffee biscuit jelly-o sweet. Marzipan gingerbread gummi bears biscuit. Bear claw topping apple pie. Carrot cake chupa chups caramels carrot cake cheesecake.

// Apple pie pudding danish halvah. Soufflé toffee pastry. Gummies caramels sweet gingerbread. Toffee fruitcake halvah. Tart jelly sugar plum chocolate bar croissant cheesecake cake. Tart cookie dragée chocolate bar tiramisu cookie gummies gummi bears jelly-o. Carrot cake cookie pastry chupa chups jelly-o chocolate bar. Oat cake chocolate bar sweet roll chocolate bar chocolate cake bonbon sweet roll tootsie roll. Carrot cake halvah sugar plum gingerbread jelly beans brownie. Chocolate bar chupa chups carrot cake bonbon fruitcake tootsie roll cake halvah caramels. Muffin gummi bears candy cake jelly beans carrot cake toffee jelly beans. Bonbon halvah powder chocolate bar candy canes pastry pudding. Tiramisu sesame snaps jelly beans.

// Delen: