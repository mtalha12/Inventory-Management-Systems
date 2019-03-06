import React, {Component } from 'react';
import uuid from 'uuid';
import AppBar from '../Components/AppBar';
import CreateSectionComponent from '../Components/CreateSection';
import * as firebase from 'firebase';
import Timestamp from 'react-timestamp';
import '../FirebaseConfig';
import CreateAddItemComponent from '../Components/CreateAddItem';
import ShowSectionComponent1 from '../Components/ShowSections1';
import ShowSectionComponent from '../Components/ShowSections';
 
  
 
class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            sectionArr : '',
            sectionName : '',
            sectionImageName : '',
            sectionImagesFiles : '',
            open : false,
            // itemName : '',
            // openItem : false,
            // itemImage : '',
            // itemDiscription : '',
            // itemStock : '',
            // itemPurchase : '',
            // itemSele : '',
            // itemPurchasePricePerUnit :'',
            // itemSelePricePerUnit : '',
        }
    }
    componentWillMount(){
        if(!localStorage.getItem('ID')){
            this.props.history.push('./Authentication');
        }
    }
    componentDidMount(){
        this.getSection()
    }
    nameHandler = (event) =>{
        //this.getSection();
        console.log(event.target.value);
        this.setState({
            [event.target.name] : (event.target.value).toLowerCase(),
        })
        console.log(this.state);
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    handleClose = () => {
        this.setState({ open: false });
     };

    getSection = () => {
       
        firebase.database().ref('stores/sections').once('value')
        .then((snapshot)=> {
           const sections = snapshot.val()
           console.log(sections);
           let sectionArr = [];
           console.log(sectionArr);
           for (let key in sections){
               const newArr = sections[key];
                newArr.key = key;
               console.log(newArr);
               console.log(newArr.imageURL, newArr.sectionName);
               sectionArr.push(newArr);
           }
           this.setState({ sectionArr })
           console.log(sectionArr);
        })
    } 
    handleFile = (event) =>{
       const name = event.target.files[0].name;
        //console.log(name);
        const file = event.target.files[0];
       
            this.setState({
                sectionImageName : name,
                sectionImagesFiles : file,
            })
        //console.log(file);
    }

    doCreateSection = () => {
        const {sectionName,sectionImagesFiles, sectionImageName} = this.state;
        const fileRef = firebase.storage().ref("images").child(sectionImageName);
        fileRef.put(sectionImagesFiles).then((snapshot)=>{
            console.log(snapshot);
            fileRef.getDownloadURL().then((url)=> {
                console.log(url);
                const obj = {
                    //sectionID : uuid(),
                    sectionName,
                    imageURL: url,
                    timeStamp: firebase.database.ServerValue.TIMESTAMP,
                }
                console.log( obj )
                firebase.database().ref('stores/sections/').push(obj).then((resolve)=>{
                   this.getSection();
                    this.setState({
                        open:false,
                    })
                    //console.log(this.props.history.push(`${this.state.name}`));
                })
                .catch((error)=>{
                    console.log(error)
                }
                );
              });
              console.log(this.state);
        })
    }
    gotoShowItemComponent = (key) =>{
        console.log(key)
        console.log("running");
        // const sectionArr = (this.state.sectionArr);
        // console.log(sectionArr)
        // for (let key in sectionArr){
        //     const thisName = sectionArr[key]
        //     console.log(thisName.sectionName);
        //    const thisSectionName = thisName.sectionName
        //    console.log(thisSectionName)


        //} 

        this.props.history.push(`/ShowItems/${key}`);
    }
    
    // itemNameHandler = (event) =>{
    //     console.log(event.target.value);
    //     this.setState({
    //         [event.target.name] : (event.target.value).toLowerCase()
    //     })
    //     console.log(this.state);
    // }
    // itemHandleClickOpen = () => {
    //     this.setState({ openItem : true });
    //   };
    // handleCloseItem = () => {
    //    this.setState({ openItem : false});
    //   };

    // addItem = () => {
    //     const id = localStorage.getItem('ID');
    //     const {itemName} = this.state;

    //     const obj1 = {
    //         id,
    //         itemName,
    //        timeStamp: firebase.database.ServerValue.TIMESTAMP,
    //     }
    //     console.log( obj1 )

    //     firebase.database().ref(`stores`).orderByChild(`name`).once('value', (snapshot) => {
    //         const data = snapshot.val();
    //         console.log(data);
    //         let arr = [];
    //         for (let key in data){
    //             const newArr = data[key]
    //             console.log(newArr.name)
    //            let name = localStorage.getItem('SectionName');
    //            console.log(name)
    //             if(newArr.name.toLowerCase() === name.toLocaleLowerCase() ){
    //                 console.log("If condition is true")
    //                 const currectSection = name;
    //                 console.log(currectSection)
    //                 firebase.database().ref("currectSection").child(id).set(obj1).then((resolve)=>{
    //                     this.setState({
    //                         open:false,
    //                     })
    //                 })
    //                 .catch(function(error){
    //                     console.log(error)
    //                 }
    //             );
    //             }
    //         }
    // })
    // } 

    // addItem =() =>{
    //     const id = localStorage.getItem('ID');
    //         const {itemName} = this.state;
    
    //         const obj1 = {
    //            itemName,
    //            timeStamp: firebase.database.ServerValue.TIMESTAMP,
    //         }
    //         console.log( obj1 );
    //         var newPostKey = firebase.database().ref('stores/sections/food').child('items').push(obj1);
    //         console.log(newPostKey)
    //         this.setState({
    //             openItem : false,
    //         })
    // }
    // handleFile = (event) =>{
    //     const name = event.target.files[0].name;
    //     console.log(name);
    //     const file = event.target.files[0];
    //     const fileRef = firebase.storage().ref("images").child(name);
    //     fileRef.put(file).then((snapshot)=>{
    //         console.log(snapshot);
    //         // fileRef.getDownloadURL().then(function(url) {
    //         //     console.log(url);
    //         //   });
    //     })
    //     console.log(event.target.files[0]);
    // }

    render(){
        console.log(this.state)
        return(
            <div>
                <AppBar />
                <CreateSectionComponent
                 open={this.state.open}
                 gotoCreateSection={this.doCreateSection}
                 handleClickOpen={this.handleClickOpen}
                 handleClose={this.handleClose}
                 nameHandler={this.nameHandler}
                 handleFile={this.handleFile}
                 />
                 <br />
                 {/* <CreateAddItemComponent 
                 openItem={this.state.openItem}
                 gotoCreateAddItem={this.addItem}
                 itemHandleClickOpen={this.itemHandleClickOpen}
                 itemHandleClose={this.handleCloseItem}
                 itemNameHandler={this.itemNameHandler}
                 /> */}
                 {/* <ShowSectionComponent 
                 sectionArrHandle={this.state.sectionArr}
                 /> */}
                 <ShowSectionComponent 
                 sectionArrHandle={this.state.sectionArr}
                 gotoShowItemComponent={this.gotoShowItemComponent}
                 />
                
            </div>
        )
    }
}
//stores/user/userid.push
export default HomeComponent 