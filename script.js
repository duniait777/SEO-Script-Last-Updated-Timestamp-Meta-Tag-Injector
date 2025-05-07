// Fungsi untuk mendapatkan waktu saat ini dalam format yang diinginkan
function getCurrentTime() {
const now = new Date();
return now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
}

// Fungsi untuk menyuntikkan meta tag
function injectMetaTag() {
const meta = document.createElement('meta');
meta.name = 'last-updated';
meta.content = getCurrentTime();
document.head.appendChild(meta);
}

// Menyuntikkan meta tag saat halaman dimuat
window.onload = injectMetaTag;
