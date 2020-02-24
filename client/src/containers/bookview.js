import React, {Component} from 'react';
import NavbarContainer from './NavbarContainer';
import CreateBook from "./CreateBook"
import BooksList from "../components/BookList"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

class Bookview extends Component {
    state={
      shopme : [
      {  product:"Macbook Pro",price:132000,id:1,qty:0,total:0,imgs:"https://fsmedia.imgix.net/47/84/48/42/d134/4d53/a414/0b200be0dfc6/apple-27-imac-computer-with-apple-wired-keyboard--wired-mouse-certified-refurbished.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=315&w=630"},
      {  product:"iPod",price:17800,id:2,qty:0,total:0,imgs:"https://image1.pricedekho.com/p/5/0/80/53980/3604510-apple-ipod-classic-160-%E0%A4%9C%E0%A4%AC-7th-generation-silver-picture-large.jpg"},
      {  product:"Airpods",price:12500,id:3,qty:0,total:0,imgs:"https://images-na.ssl-images-amazon.com/images/I/41tTVEPFRoL._SY445_.jpg"},
      {  product:"iPhone",price:95000,id:4,qty:0,total:0,imgs:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWYK2?wid=890&hei=890&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567304928359"} ,
      {  product:"USB Cord",price:1500,id:5,qty:0,total:0,imgs:"https://bestdealsnepal.com.np/wp-content/uploads/2018/01/apple-lightning-to-usb-cable.jpg"}, 
      {  product:"Apple Watch",price:5500,id:6,qty:0,total:0,imgs:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWUQ2_VW_34FR+watch-44-alum-silver-nc-5s_VW_34FR_WF_CO?wid=750&hei=712&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1572037927131,1569365637670" }  
  ],
}

componentDidMount(){
    var result
    axios.get("http://localhost:5000/posts/books").then(res=>{
        result = res.data
        console.log(result)

        result.forEach(element => {
            axios.get("http://localhost:5000/users/" + element.authorId)
                .then(r=>{
                    console.log(r.data.user.name)
                    element.name  = r.data.user.name
                })
        });

        console.log(result)

        this.setState({
            ...this.state,
            shopme : result
        })
        console.log(this.state)
    })
  }
  render() {

   const shoplist= this.state.shopme ?  this.state.shopme.map((items,index)=>{
       const link = "http://localhost:3000/profile/" + items.authorId
        return(
            <div className="items" key={items._id} >
            <div className=" small " > 
                <div className="card " >
                <a href={link}>{items.name}</a>
                <img src={"https://sfcb.org/blog/wp-content/uploads/2011/03/kylebean02.jpg"} className="card-img-top imgb" alt="..."/>
                {/* <img src={""} className="card-img-top imgb" alt="..."/> */}
                <div className="card-body">
                <h3 className="card-title ">{items.text}</h3>
                <h4 className="card-text ">Price : Rs.{ Math.ceil( Math.random()*1000) }</h4>

               </div>
               </div>
            </div>
            </div>
        ) 
    }): (<div>No items</div>)



    return (
        <div>
            <NavbarContainer/>
            <CreateBook/>
            {/* <BooksList/> */}
            <div className="grid-container">
             {shoplist}
            </div>
        </div>

    )
    
    }
}
  

export default Bookview;