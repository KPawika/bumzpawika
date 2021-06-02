function addScore() {
  var str = document.getElementById("nums1").value;
  var res = str.replace("[","");
  res = res.replace("]","");
  res = res.split(",");

  var count=0
  
  res.forEach(element => {
    var x = element;
    if((x!=1 && x%2!=0 && x%3!=0 && x%5!=0 && x%7!=0 )|| (x==2 || x==3 || x==5|| x==7)){
      count+=5;
    }
    
    else if(x%2==0){
      count++;
      console.log("Even");
    }
    else{
      count+=3;
    }
  });
  document.getElementById("result1").innerHTML = '<br>Output : '+count;
}


function sumEvenOdd(){
  var str = document.getElementById("nums2").value;
  var res = str.replace("[","");
  res = res.replace("]","");
  res = res.split(",");
  var even=0,odd=0

  res.forEach(element => {
    var x = element;
    if(x%2 == 0){
      even+=parseInt(x);
    }
    else{
      odd+=parseInt(x);
    }
  });

  var result = {a:0,b:0,c:0}
  result.a = even;
  result.b = odd;
  result.c = even-odd;

  console.log(result)
  document.getElementById("result2").innerHTML = '<br>Output : [ {label: "a", sum:'+result.a+'}, {label : "b", sum: '+result.b+'}, {label : "c", sum: '+result.c+'} ]';
}


function arrSort(){
  var str = document.getElementById("nums3").value;
  var res = str.replace("[","");
  res = res.replace("]","");
  res = res.split(",");

  var arr=[];

  res.forEach(element => {
    var x = parseInt(element);
    if(!isNaN(x)){
      arr.push(x);
    }
    console.log(x);
  });

  sort(arr);

  //arr.sort(function(a,b){return a-b});

  var min = arr[0];
  var max = arr[arr.length-1];

  document.getElementById("result3").innerHTML = '<br>Output : [ {label: "a", min:'+min+'}, {label : "b", max: '+max+'}, {label : "c", sort: ['+arr+']} ]';
}

function sort(arr){
  var temp;
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

}
