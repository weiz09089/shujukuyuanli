const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync(path.join(__dirname, '..', '数据库原理及应用机考复习题库-2026春.txt'), 'utf-8');
const lines = txt.split('\n').map(l => l.trim()).filter(l => l);

const questions = { choice: [], judge: [], design: [], comprehensive: [] };
let currentMode = null;
let currentQ = null;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.match(/^一、\s*单选题/)) { currentMode = 'choice'; continue; }
    if (line.match(/^二、\s*判断题/)) { currentMode = 'judge'; continue; }
    if (line.match(/^三、\s*设计题/)) { currentMode = 'design'; continue; }
    if (line.match(/^四、\s*综合应用题/)) { currentMode = 'comprehensive'; continue; }
    
    // Some lines start with bullet •
    let cleanLine = line.replace(/^[•\d]+\.?\s*/, '');
    
    if (currentMode === 'choice') {
        // Question matches something like (A) is ... or ... (B) ... 
        if (cleanLine.match(/A\.|B\.|C\.|D\./) && !cleanLine.includes('（') && !cleanLine.includes('(')) {
            // Probably options
            if (currentQ) {
                // parse options A. xxx B. yyy C. zzz D. www
                const opts = cleanLine.split(/[A-D]\./).map(x => x.trim()).filter(x => x);
                if (opts.length > 0) {
                    opts.forEach(opt => {
                        if (opt && currentQ.options.length < 4) currentQ.options.push(opt);
                    });
                }
            }
        } else if (cleanLine.match(/（[A-D]）/) || cleanLine.match(/\([A-D]\)/)) {
            if (currentQ && currentQ.question) questions.choice.push(currentQ);
            
            let match = cleanLine.match(/（\s*([A-D])\s*）/) || cleanLine.match(/\(\s*([A-D])\s*\)/);
            let ans = match ? match[1] : '';
            let qText = cleanLine.replace(/（\s*[A-D]\s*）/, '（  ）').replace(/\(\s*[A-D]\s*\)/, '（  ）');
            
            currentQ = { type: 'choice', question: qText, answer: ans, options: [] };
        } else if (currentQ) {
            // maybe multiline options
            const opts = cleanLine.split(/[A-D]\./).map(x => x.trim()).filter(x => x);
            opts.forEach(opt => {
                if (opt && currentQ.options.length < 4) currentQ.options.push(opt);
            });
        }
    } else if (currentMode === 'judge') {
        // Check for T/F
        if (cleanLine.includes('（T）') || cleanLine.includes('（F）') || cleanLine.includes('(T)') || cleanLine.includes('(F)')) {
            let isTrue = cleanLine.includes('T');
            let qText = cleanLine.replace(/（\s*[TF]\s*）/, '').replace(/\(\s*[TF]\s*\)/, '');
            questions.judge.push({ type: 'judge', question: qText, answer: isTrue });
        }
    } else if (currentMode === 'design' || currentMode === 'comprehensive') {
        if (cleanLine.match(/^\d+．/) || cleanLine.match(/^\d+\./)) {
            if (currentQ && currentQ.question) questions[currentMode].push(currentQ);
            currentQ = { type: currentMode, question: cleanLine, answer: '' };
        } else if (currentQ) {
            currentQ.answer += cleanLine + '\n';
        }
    }
}
if (currentQ && currentMode && (currentMode === 'choice' || currentMode === 'design' || currentMode === 'comprehensive')) {
    if (currentMode === 'choice') {
        if (currentQ.question) questions.choice.push(currentQ);
    } else {
        questions[currentMode].push(currentQ);
    }
}

const output = `const QUESTIONS = ${JSON.stringify(questions, null, 2)};`;
fs.writeFileSync(path.join(__dirname, 'questions.js'), output, 'utf-8');
console.log('Parsed database questions');
