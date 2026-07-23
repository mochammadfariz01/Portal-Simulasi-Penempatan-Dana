const nominal=document.getElementById('nominal'),rate=document.getElementById('rate'),days=document.getElementById('days');
function calc(){const n=value('nominal'),r=Number(rate.value)||0,d=Number(days.value)||0,net=n*(r/100)*(d/365)*.8;document.getElementById('interest').textContent=rupiah(net);document.getElementById('total').textContent=rupiah(n+net)}
calc()});
calc()});
document.querySelectorAll('.tenor').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tenor').forEach(x=>x.classList.remove('active'));b.classList.add('active');days.value=b.dataset.days;calc()});
nominal.oninput=rate.oninput=calc;days.value=30;calc();