// Albumschere 63 · ce0a6a4413
const C='albumschere-63-ce0a6a4413',F=['./','index.html','manifest.json','icon-180.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F.map(u=>new Request(u,{cache:'reload'})))));});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET')return;
  if(q.mode==='navigate'||q.url.endsWith('/')||q.url.endsWith('index.html')){
    e.respondWith(fetch(q,{cache:'no-store'}).then(r=>{if(r.ok){const c=r.clone();caches.open(C).then(x=>x.put('index.html',c));}return r;}).catch(()=>caches.match('index.html')));return;}
  e.respondWith(caches.match(q,{ignoreSearch:true}).then(r=>r||fetch(q)));});
