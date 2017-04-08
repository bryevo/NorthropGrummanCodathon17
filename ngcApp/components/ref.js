// from firebase import firebase
// import random
// import time

// parkingStructures = ["Parking Structure 12", "Parking Structure 7"]


// firebase = firebase.FirebaseApplication("https://webapptest-47f98.firebaseio.com/", None)

// startTime = time.time()
// while True:
//     for ps in parkingStructures:
//         new_val = int(firebase.get('/', ps) + raandom.randint(-1,1))
//         print (ps + " : " + str(new_val))
//         firebase.put('/', ps, int(new_val))
//         time.sleep(1)