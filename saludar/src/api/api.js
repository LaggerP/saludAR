import firebase from '../firebase'

const firebaseApi = {
    createMessage(_name, _title, _message) {
        firebase.database().ref('messages').push({
            name: _name,
            title: _title,
            message: _message
        });
    },

    getMessages() {
        var allMessagesJson = [];
        return new Promise(function (resolve, reject) {
            firebase.database().ref('messages').on("value", function (snapshot) {
                if (snapshot) {
                    var data = snapshot.val();
                    const keys = Object.keys(data);
                    for (const k of keys) {
                        const msg = {
                            nombre: data[k].name,
                            titulo: data[k].title,
                            mensaje: data[k].message,
                        };
                        allMessagesJson.push(msg);
                    }
                    resolve(allMessagesJson)
                } else {
                    reject('error');
                }
            });
        })
    },


}


export default firebaseApi