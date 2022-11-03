var storea = firestore.collection("store");


async function addStore() {
    await firestore.collection("store").add({
        name: "Nguyễn Tuấn Anh",
        email: "anh@gmail.com"

    })
}
// addStore(); thêm

async function updateStore() {
    await firebase.firestore().collection("store").doc("wiceuuEihnNyqhTwuo8U").update({ name: "bar" });
}


updateStore();

// sửa 

async function updateStore() {
    await firebase.firestore().collection("store").doc("wiceuuEihnNyqhTwuo8U").delete();
}

storea.get().then((snapshot) => {
    snapshot.forEach(store => {
        console.log(store.data());
    });
})