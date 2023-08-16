class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Basic Insert Node
    
    insert(value){
        let currentNode = this;
        while(true){
            if(value < currentNode.value){
                if (currentNode.left === null){
                    currentNode.left = new Node(value);
                    break;
                } else{
                    currentNode = currentNode.left;
                }
            } else{
                if (currentNode.right === null){
                    currentNode.right = new Node(value);
                    break;
                } else{
                    currentNode = currentNode.right;
                }
            }
        }
        return currentNode
    }

    // Checking if BST is valid or not

    isValidBST(node, min = null, max = null){
        if (!node) return true;
        if(max !== null && node.value >= max){
            return false;
        }

        if (min !== null && node.value <= min){
            return false;
        }

        const leftSide = this.isValidBST(node.left, min, node.value);
        const rightSide = this.isValidBST(node.right, node.value, max);
        return leftSide && rightSide;
    }
}

// Convert String to a number

function convertListToNumber(str, i){
    return str[i].split('(').join('').split(')').join('').split(',').join('')
}


function ArrayChallange(strArr){
    startValueFromList = convertListToNumber(strArr, 0)
    startParentNode = startValueFromList[1]; // Parent Node
    startChildNode = startValueFromList[0]; // Child Node
    node = new Node(startParentNode); // Adding Parent and Child node
    node.insert(startChildNode);
    // Looping through entire array
    for (i=1; i<strArr.length; i++){
        myListValue = convertListToNumber(strArr, i);
        console.log(myListValue.length);
        // Looping the "12" in the string and converting it to a number
        for (j=0; j<myListValue.length; j++){
            node.insert(myListValue[j])
        }

        parentNode = Number(myListValue[0]);
    }

    // CHeck if the BST is valid or not

    // return node.isValidBST(node);
    return strArr;
}

// function Call

console.log(ArrayChallange(["(1,2)","(2,4)","(5,7)","(7,2)","(9,5)"]));