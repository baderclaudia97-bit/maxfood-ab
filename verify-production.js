#!/usr/bin/env node

/**
 * MaxFood AB - Production Readiness Verification
 * This script verifies that all components are ready for Netlify deployment
 */

const fs = require('fs');
const path = require('path');

const checks = [];
let passed = 0;
let failed = 0;

function check(name, condition, details = '') {
  const status = condition ? '✅' : '❌';
  const result = condition ? 'PASS' : 'FAIL';
  
  console.log(`${status} ${name}`);
  if (details && !condition) console.log(`   └─ ${details}`);
  
  if (condition) passed++;
  else failed++;
  
  checks.push({ name, result, details });
}

console.log('\n╔══════════════════════════════════════════════════════╗');
console.log('║     MaxFood AB - Production Readiness Check          ║');
console.log('╚══════════════════════════════════════════════════════╝\n');

const projectPath = __dirname;

// 1. Core Files
console.log('📦 Core Files:');
check('package.json', fs.existsSync(path.join(projectPath, 'package.json')));
check('next.config.mjs', fs.existsSync(path.join(projectPath, 'next.config.mjs')));
check('netlify.toml', fs.existsSync(path.join(projectPath, 'netlify.toml')));
check('middleware.ts', fs.existsSync(path.join(projectPath, 'middleware.ts')));
check('.gitignore', fs.existsSync(path.join(projectPath, '.gitignore')));

// 2. i18n Configuration
console.log('\n🌍 i18n Configuration:');
check('i18n/routing.ts', fs.existsSync(path.join(projectPath, 'i18n/routing.ts')));
check('i18n/request.ts', fs.existsSync(path.join(projectPath, 'i18n/request.ts')));

// 3. Messages (All 8 Languages)
console.log('\n📝 Messages (8 Languages):');
const languages = ['en', 'es', 'sv', 'fr', 'de', 'ar', 'zh', 'ja'];
languages.forEach(lang => {
  check(`messages/${lang}.json`, fs.existsSync(path.join(projectPath, `messages/${lang}.json`)));
});

// 4. PWA Files
console.log('\n📱 PWA Support:');
check('public/manifest.json', fs.existsSync(path.join(projectPath, 'public/manifest.json')));
check('public/sw.js', fs.existsSync(path.join(projectPath, 'public/sw.js')));
check('public/offline.html', fs.existsSync(path.join(projectPath, 'public/offline.html')));

// 5. Build Artifacts
console.log('\n🔨 Build Artifacts:');
check('.next folder', fs.existsSync(path.join(projectPath, '.next')));
check('node_modules', fs.existsSync(path.join(projectPath, 'node_modules')));

// 6. Application Structure
console.log('\n📂 Application Structure:');
check('app/ directory', fs.existsSync(path.join(projectPath, 'app')));
check('app/layout.tsx', fs.existsSync(path.join(projectPath, 'app/layout.tsx')));
check('app/[locale]/page.tsx', fs.existsSync(path.join(projectPath, 'app/[locale]/page.tsx')));
check('public/ directory', fs.existsSync(path.join(projectPath, 'public')));

// 7. Documentation
console.log('\n📖 Documentation:');
check('README.md', fs.existsSync(path.join(projectPath, 'README.md')));
check('DEPLOYMENT_GUIDE.md', fs.existsSync(path.join(projectPath, 'DEPLOYMENT_GUIDE.md')));

// Summary
console.log('\n' + '═'.repeat(54));
console.log(`\n📊 Results: ${passed}/${passed + failed} checks passed\n`);

if (failed === 0) {
  console.log('✅ All checks passed! Ready for Netlify deployment.\n');
  process.exit(0);
} else {
  console.log(`❌ ${failed} check(s) failed. Please review above.\n`);
  process.exit(1);
}
