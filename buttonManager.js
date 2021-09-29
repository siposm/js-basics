
import { workerArray as WA } from './workerManager.js'

let btn = document.getElementById("delete-worker").onclick = deleteWorker

function deleteWorker() {

    WA.splice(Math.floor(Math.random()*WA.length), 1);
    console.log(WA);

    console.log("DELETED")

    // no databinding!!!
    // change on the array but not on the UI

}