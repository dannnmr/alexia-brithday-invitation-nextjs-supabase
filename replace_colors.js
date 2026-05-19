const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /#faf3e8/g, replace: '#050505' },
  { search: /#fdfbf7/g, replace: '#0a0a0a' },
  { search: /#fffaf5/g, replace: '#111111' },
  { search: /bg-white/g, replace: 'bg-[#0a0a0a]' },
  { search: /#c25a3a/g, replace: '#ffffff' },
  { search: /#a53b5c/g, replace: '#a1a1aa' },
  { search: /#8a2b4b/g, replace: '#e4e4e7' },
  { search: /#d61958/g, replace: '#ff007f' },
  { search: /#f12c6a/g, replace: '#ff007f' },
  { search: /#f65a88/g, replace: '#ff007f' },
  { search: /#e8d5c4/g, replace: 'rgba(255,255,255,0.1)' },
  { search: /#d3bca8/g, replace: 'rgba(255,255,255,0.1)' },
  { search: /#e8dbd1/g, replace: '#1a1a1a' },
  { search: /pink-50/g, replace: 'zinc-900' },
  { search: /pink-100/g, replace: 'zinc-800' },
  { search: /pink-200/g, replace: 'zinc-800' },
  { search: /orange-50/g, replace: 'zinc-900' },
  { search: /orange-100/g, replace: 'zinc-800' },
  { search: /bg-white\/80/g, replace: 'bg-black/80' },
  { search: /bg-white\/50/g, replace: 'bg-black/50' },
  { search: /bg-white\/90/g, replace: 'bg-black/90' },
  { search: /bg-white\/40/g, replace: 'bg-black/40' },
  { search: /bg-white\/30/g, replace: 'bg-black/30' },
  { search: /bg-white\/20/g, replace: 'bg-black/20' },
  { search: /from-\[\#faf3e8\]/g, replace: 'from-[#050505]' },
  { search: /to-\[\#faf3e8\]/g, replace: 'to-[#050505]' },
  { search: /via-pink-50\/50/g, replace: 'via-white/5' }
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      for (const r of replacements) {
        content = content.replace(r.search, r.replace);
      }
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('src/components');
console.log('Color replacement complete.');
