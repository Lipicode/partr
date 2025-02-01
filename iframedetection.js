fetch('whitelisted.json')
.then(response => response.json())
.then(data => {
const origin = window.location.origin;
if (!data.whitelist.includes(origin)) {
window.location.href = 'iframedetection.html';
}
})
.catch(error => console.error("Error loading whitelist:", error));
if (window !== window.parent) {
document.body.innerHTML = `
<div style="display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;color:#fff;background:#121212">
<div>
<h1 style="color:#ff5555">lol bro really thought they was finna iframe this? NUH UH</h1>
<p>join the discord and ask the owner for your site to be whitelisted!</p>
<a href="https://discord.gg/EFCMFDbvra" style="display:inline-block;padding:10px 15px;background:#7289DA;color:#fff;border-radius:5px;text-decoration:none;font-weight:bold;">Join Discord</a>
</div>
</div>
`;
}
