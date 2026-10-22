document.getElementById("yr").textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
const bg=document.querySelector(".bgvideo");
if(bg){bg.muted=true;const p=bg.play();if(p&&p.catch)p.catch(()=>{})}
