const digits=v=>String(v).replace(/\D/g,'');
const value=id=>Number(digits(document.getElementById(id).value))||0;
const rupiah=n=>'Rp '+Math.round(n).toLocaleString('id-ID');
const persen=n=>Number(n).toLocaleString('id-ID',{minimumFractionDigits:2,maximumFractionDigits:2})+'%';
function actualDays(period,months){const [y,m]=period.split('-').map(Number);const a=new Date(Date.UTC(y,m-1,1)),b=new Date(Date.UTC(y,m-1+months,1));return Math.round((b-a)/86400000)}
function tierRate(n){if(n>=1e9)return 5;if(n>=5e8)return 4.75;if(n>=3e8)return 4.5;if(n>=1e8)return 4.25;if(n>=25e6)return 4;if(n>=1e6)return 3.75;return 0}
function bindTenor(fn){document.querySelectorAll('.tenor').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tenor').forEach(x=>x.classList.remove('active'));b.classList.add('active');fn()}))}
