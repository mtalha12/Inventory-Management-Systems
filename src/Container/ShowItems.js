import React, { Component } from 'react'
import * as firebase from 'firebase';
import '../FirebaseConfig';
import AppBar from '../Components/AppBar';
import CreateAddItemComponent from '../Components/CreateAddItem';
import ShowItemComponentTheme from '../Components/ShowItems';
import ShowItemCardComponent from '../Components/Cards';


 

  

class ShowItemComponent extends Component{
    constructor(){
        super();
        this.state = {
            itemArr : '',
            itemName : '',
            openItem : false,
            itemImageNmae : '',
            itemImagesFiles : '',
            itemDiscription : '',
            itemStock : '',
            itemPurchase : '',
            itemSele : '',
            itemPurchasePricePerUnit :'',
            itemSalePricePerUnit : '',
        }
    }
    componentDidMount(){
        this.getItems();
    }

    itemNameHandler = (event) =>{
        console.log(event.target.value);
        this.setState({
            [event.target.name] : (event.target.value).toLowerCase()
        })
        console.log(this.state);
    }
    itemHandleClickOpen = () => {
        this.setState({ openItem : true });
      };
    handleCloseItem = () => {
       this.setState({ openItem : false});
      };
      handleFile = (event) => {
         const name =  event.target.files[0].name;
         console.log(name);
         const file = event.target.files[0];
         console.log(file);
         this.setState({
             itemImageNmae : name,
             itemImagesFiles : file,
         })
      }
    //   firebase.database().ref(`user`).orderByChild("bloodGroup").equalTo(params.bloodGroup).once('value', (snapshot) => {
    //     const data = snapshot.val();
    //     console.log(data)
    //firebase.database().ref(`stores/sections`).orderByChild(params.key).equalTo(params.key).once('value')
      getItems = () => {
        const param = this.props.match.params;
        console.log(param.key, firebase.database().ref(`stores/sections`).child(param.key));
         firebase.database().ref(`stores/sections`).child(param.key).once('value', (snapshot)=> {
           const data = snapshot.val()
           console.log(data);
           let itemArr = [];
           console.log(itemArr);
           const items = data.items;
           if(items){
                for (let key in items){
                    const obj = items[key];
                    obj.key = key;
                    console.log(key);
                    console.log(obj.imageURL, obj.itemName);
                    itemArr.push(obj);
                }
                this.setState({ itemArr })
                console.log(itemArr);
        }
    })
    } 
      addItem =() =>{
       const params = this.props.match.params;
       console.log(params);
           const {itemName,itemImageNmae,itemImagesFiles,itemSalePricePerUnit,itemDiscription} = this.state;
            const fileRef = firebase.storage().ref("images").child(itemImageNmae);
            fileRef.put(itemImagesFiles).then((snapshot)=>{
                console.log(snapshot);
                fileRef.getDownloadURL().then((url)=>{
                    console.log(url)
                    const obj1 = {
                       itemName,
                       itemSalePricePerUnit,
                       itemDiscription,
                       imageURL : url,
                       timeStamp: firebase.database.ServerValue.TIMESTAMP,
                    }
                    console.log( obj1 );
                    var newPostKey = firebase.database().ref(`stores/sections/` +  params.key + "/items" ).push(obj1);
                    this.getItems();
                    console.log(newPostKey)
                    this.setState({
                        openItem : false,
                    })
                })
                .catch((error)=>{
                    this.setState({
                        openItem : false,
                    })
                    console.log(error)
                })
            })
    
    }

    render(){
        return(
            <div>
                 <AppBar />
                 <CreateAddItemComponent 
                 openItem={this.state.openItem}
                 gotoCreateAddItem={this.addItem}
                 itemHandleClickOpen={this.itemHandleClickOpen}
                 itemHandleClose={this.handleCloseItem}
                 itemNameHandler={this.itemNameHandler}
                 handleFile={this.handleFile}
                 />
                 {/* <ShowItemComponentTheme
                 itemArrHandle={this.state.itemArr}
                 /> */}
                 <ShowItemCardComponent
                 itemArrHandle={this.state.itemArr}
                 // showItemImage={this.showItemImage}
                 />
            </div>
        )
    }
}
export default ShowItemComponent
