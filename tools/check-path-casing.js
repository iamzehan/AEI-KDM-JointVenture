const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

const imports = [];
walk(path.join(root, 'src'), (file) => {
  if (!file.endsWith('.ts') && !file.endsWith('.tsx') && !file.endsWith('.js') && !file.endsWith('.jsx')) return;
  const content = fs.readFileSync(file, 'utf8');
  const re = /from\s+['\"](@\/[^'\"]+)['\"]/g;
  let m;
  while ((m = re.exec(content))) imports.push({file, spec: m[1]});
});

function existsCaseSensitive(p) {
  // p is absolute
  const parts = p.split(path.sep).filter(Boolean);
  let cur = path.isAbsolute(p) ? path.parse(p).root : '';
  for (const part of parts) {
    try {
      const items = fs.readdirSync(cur || path.sep);
      const found = items.find(i => i === part);
      if (!found) return false;
      cur = path.join(cur, part);
    } catch (e) {
      return false;
    }
  }
  return true;
}

const problems = [];
for (const imp of imports) {
  const spec = imp.spec.replace(/^@\//, 'src/');
  const abs = path.join(root, spec);
  // try index.tsx or .tsx/.ts/.js
  const candidates = [abs, abs + '.tsx', abs + '.ts', abs + '.jsx', abs + '.js', path.join(abs, 'index.tsx'), path.join(abs, 'index.ts'), path.join(abs, 'index.js'), path.join(abs, 'index.jsx')];
  const ok = candidates.some(c => existsCaseSensitive(c));
  if (!ok) problems.push({file: imp.file, spec: imp.spec, candidates});
}

if (problems.length === 0) {
  console.log('No casing problems detected for @/ imports.');
  process.exit(0);
}
console.log('Found potential casing/missing-module problems (on case-sensitive FS):');
for (const p of problems) {
  console.log('- in', path.relative(root, p.file), 'import', p.spec);
  console.log('  checked:', p.candidates.map(c => path.relative(root, c)).join(', '));
}
process.exit(1);
