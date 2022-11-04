
var storea = firestore.collection("category");


async function addCategory() {

    var categoryname1 = document.getElementById('categoryname').value;
    if(categoryname1.length==0){
        alert("Không được để trống thể loại")
    }else{
    await firestore.collection("category").add({
        namecategory : categoryname1
         
    })
   
}
       
}
// addStore(); 

//sửa

async function updateStore() {
    await firebase.firestore().collection("store").doc("wiceuuEihnNyqhTwuo8U").update({ name: "bar" });
}


updateStore();

// xóa

async function updateStore() {
    await firebase.firestore().collection("store").doc("wiceuuEihnNyqhTwuo8U").delete();
}

// Loaddata

storea.get().then((snapshot) => {
    snapshot.forEach(store => {
        console.log(store.data());
    });
})