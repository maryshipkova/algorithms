let bracketsMap = new Map();
bracketsMap.set('(', ')');
bracketsMap.set('{', '}');
bracketsMap.set('[', ']');
bracketsMap.set('<', '>');

function bracketSequences(sequence){
    let bracketSequence = sequence.split('');
    let stack = [];

    while(bracketSequence.length){
        let curr = bracketSequence.shift();
        if([...bracketsMap.keys()].includes(curr)){
            stack.push(curr);
        }
        if([...bracketsMap.values()].includes(curr)){
            let last = stack.pop();
            if(bracketsMap.get(last) !== curr)
                break;
        }
    }
    return !bracketSequence.length;
}

// console.log('true',bracketSequences('(b{[]})'));
// console.log('false',bracketSequences('a({c[}h ])'));