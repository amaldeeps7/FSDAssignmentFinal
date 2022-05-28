function checkwin()
{
  var c0, c1, c2, c3, c4, c5, c6, c7, c8
  c0 = document.getElementById('0').innerText;
  c1 = document.getElementById("1").innerText;
  c2 = document.getElementById("2").innerText;
  c3 = document.getElementById("3").innerText;
  c4 = document.getElementById("4").innerText;
  c5 = document.getElementById("5").innerText;
  c6 = document.getElementById("6").innerText;
  c7 = document.getElementById("7").innerText;
  c8 = document.getElementById("8").innerText;

  if( (c0=='X'&&c1=='X'&&c2=='X')||
	    (c3=='X'&&c4=='X'&&c5=='X')||
	    (c6=='X'&&c7=='X'&&c8=='X')||
	    (c0=='X'&&c3=='X'&&c6=='X')||
	    (c1=='X'&&c4=='X'&&c7=='X')||
	    (c2=='X'&&c5=='X'&&c8=='X')||
	    (c0=='X'&&c4=='X'&&c8=='X')||
	    (c2=='X'&&c4=='X'&&c6=='X'))
	{
    document.querySelector('h2').textContent="X Won"
    document.getElementById('0').disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
  }
else if(	(c0=='O'&&c1=='O'&&c2=='O')||
	        (c3=='O'&&c4=='O'&&c5=='O')||
	        (c6=='O'&&c7=='O'&&c8=='O')||
	        (c0=='O'&&c3=='O'&&c6=='O')||
	        (c1=='O'&&c4=='O'&&c7=='O')||
	        (c2=='O'&&c5=='O'&&c8=='O')||
	        (c0=='O'&&c4=='O'&&c8=='O')||
	        (c2=='O'&&c4=='O'&&c6=='O'))
  {
    document.querySelector('h2').textContent="O Won"
    document.getElementById('0').disabled = true;
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
}
}

function reset()
{
    document.getElementById('0').innerText = '';
    document.getElementById("1").innerText = '';
    document.getElementById("2").innerText = '';
    document.getElementById("3").innerText = '';
    document.getElementById("4").innerText = '';
    document.getElementById("5").innerText = '';
    document.getElementById("6").innerText = '';
    document.getElementById("7").innerText = '';
    document.getElementById("8").innerText = '';
    document.getElementById('0').disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.querySelector('h2').textContent=""
    turn_flag=1

}

function dbClickfn(item) {
  document.getElementById(item).innerHTML = '';
}



turn_flag=1
last_clicked=""
const onClick = function() {
    console.log(this.id, this.innerHTML);
    if (turn_flag==1)
    {
    // boxes[this.id].innerHTML = 'X' === "O" ? "X" : "O";
    boxes[this.id].innerHTML = 'X'
    turn_flag=2
    checkwin()
    }
    else
    {
      boxes[this.id].innerHTML = 'O'
      turn_flag=1
      checkwin()
    }
  }
  document.getElementById('0').onclick = onClick;
  document.getElementById('1').onclick = onClick;
  document.getElementById('2').onclick = onClick;
  document.getElementById('3').onclick = onClick;
  document.getElementById('4').onclick = onClick;
  document.getElementById('5').onclick = onClick;
  document.getElementById('6').onclick = onClick;
  document.getElementById('7').onclick = onClick;
  document.getElementById('8').onclick = onClick;

  var boxes = document.getElementsByClassName('btn');
