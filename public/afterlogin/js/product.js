var storea = firestore.collection("store");


async function addStore() {
    await firestore.collection("store").add({
        name: "Nguyễn Tuấn Anh",
        email: "anh@gmail.com"

    })
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