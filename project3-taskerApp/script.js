let p = document.getElementById("demo");
let tasks = [];

function init(){
    document.getElementById("inputValues").focus();
}

function trimmer(txtValues){
    if(txtValues.trim() !== ""){
        tasks.push(txtValues);
        document.getElementById("inputValues").value = ""; 
    }
}

function addCheckBox() {
    let inputValues = document.getElementById("inputValues").value;
    if (inputValues.trim() !== "") {
      const br = document.createElement("br");
      let chBox = document.createElement("input");
      let lbl = document.createElement("label");
      trimmer(inputValues);
  
      chBox.name = "options";
      chBox.type = "checkbox";
      chBox.value = "unchecked";
      chBox.className = "hidden-checkbox";
      chBox.id = "task" + document.querySelectorAll("input[type='checkbox']").length;

      if (tasks.length > 0) {
        lbl.htmlFor = chBox.id;
        lbl.appendChild(document.createTextNode(tasks[tasks.length - 1]));
        lbl.appendChild(br);
      }
  
      document.getElementById("check-box").append(chBox);
      document.getElementById("check-box").append(lbl);
      document.getElementById("inputValues").focus();
    }
  }
  

function removeBoxes(){
    for (let i=0; i< tasks.length; i++){
        var box = document.getElementById(`task${i}`);
        if(box && box.checked){
            label = document.querySelector(`label[for=task${i}]`);
            label.parentNode.removeChild(label);
            box.parentNode.removeChild(box);
            break;
        }
    }
}
