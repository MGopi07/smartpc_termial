const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('/home/sys-0789/smart_pc_and_termial/src', function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace hex colors (case-insensitive)
    content = content.replace(/#d4af37/gi, '#f97316'); // base orange (orange-500)
    content = content.replace(/#f9d976/gi, '#fdba74'); // light orange (orange-300)
    content = content.replace(/#aa8c2c/gi, '#ea580c'); // dark orange (orange-600)
    content = content.replace(/#fff7d6/gi, '#ffedd5'); // ultra light orange
    content = content.replace(/#fff6d6/gi, '#ffedd5'); // ultra light orange
    
    // Replace RGBA (we used some rgba values for drop-shadows with exact RGB of the golds)
    // #d4af37 is 212,175,55 -> orange-500 is 249,115,22
    content = content.replace(/rgba\(212,175,55,/g, 'rgba(249,115,22,');
    content = content.replace(/rgba\(212,\s*175,\s*55,/g, 'rgba(249, 115, 22,');
    
    // #f9d976 is 249,217,118 -> orange-300 is 253,186,116
    content = content.replace(/rgba\(249,217,118,/g, 'rgba(253,186,116,');
    content = content.replace(/rgba\(249,\s*217,\s*118,/g, 'rgba(253, 186, 116,');
    
    // #aa8c2c is 170,140,44 -> orange-600 is 234,88,12
    content = content.replace(/rgba\(170,140,44,/g, 'rgba(234,88,12,');
    content = content.replace(/rgba\(170,\s*140,\s*44,/g, 'rgba(234, 88, 12,');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
