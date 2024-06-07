const allFamilies = [
    'durgaFamily', 'durgaChildren', 'moongaContainer',
    'basaantlalFamily', 'surendraFamily', 'ashokFamily', 
    'sanjuFamily', 'nitishFamily', 'alokFamily' , 'mahendraFamily' , 'pinkyFamily' , 'kailashFamily' , 'sarojFamily' , 'anjuFamily' ,
    'madhuFamily' , 'jhindiFamily' , 'sudhaFamily' , 'praveenFamily'

];


const familyStack = [];
const connections = {};

document.getElementById('durga').addEventListener('click', function() {
    navigateToFamily(['durgaFamily', 'moongaContainer', 'durgaChildren'], 'durga');
});

document.getElementById('basaantlal').addEventListener('click', function() {
    navigateToFamily(['basaantlalFamily'], 'basaantlal');
});

document.getElementById('surendra').addEventListener('click', function() {
    navigateToFamily(['surendraFamily'], 'surendra');
});

document.getElementById('ashok').addEventListener('click', function() {
    navigateToFamily(['ashokFamily'], 'ashok');
});

document.getElementById('sanju').addEventListener('click', function() {
    navigateToFamily(['sanjuFamily'], 'sanju');
});

document.getElementById('nitish').addEventListener('click', function() {
    navigateToFamily(['nitishFamily'], 'nitish');
});

document.getElementById('alok').addEventListener('click', function() {
    navigateToFamily(['alokFamily'], 'alok');
});
document.getElementById('saroj').addEventListener('click', function() {
    navigateToFamily(['sarojFamily'], 'saroj');
});
//praveen

document.getElementById('praveen').addEventListener('click', function() {
    navigateToFamily(['praveenFamily'], 'praveen');
});

// Add event listeners for Mahendra family members
document.getElementById('mahendra').addEventListener('click', function() {
    navigateToFamily(['mahendraFamily'], 'mahendra');
});

document.getElementById('jhindi').addEventListener('click', function() {
    navigateToFamily(['jhindiFamily'], 'jhindi');
});

document.getElementById('anju').addEventListener('click', function() {
    navigateToFamily(['anjuFamily'], 'anju');
});

// Pinky family
document.getElementById('pinky').addEventListener('click', function() {
    navigateToFamily(['pinkyFamily'], 'pinky');
});


document.getElementById('madhu').addEventListener('click', function() {
    navigateToFamily(['madhuFamily'], 'madhu');
});

document.getElementById('sudha').addEventListener('click', function() {
    navigateToFamily(['sudhaFamily'], 'sudha');
});

document.getElementById('kailash').addEventListener('click', function() {
    navigateToFamily(['kailashFamily'], 'kailash');
});



document.getElementById('backButton').addEventListener('click', function() {
    if (familyStack.length > 1) {
        familyStack.pop();
        const lastFamily = familyStack[familyStack.length - 1];
        showFamily(lastFamily.ids);
        showConnections(lastFamily.root);
    }
});

document.getElementById('searchBox').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    allFamilies.forEach(familyId => {
        const element = document.getElementById(familyId);
        const boxes = element.querySelectorAll('.box');
        boxes.forEach(box => {
            if (box.textContent.toLowerCase().includes(searchTerm)) {
                navigateToFamily([familyId], box.id);
                box.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
});

function navigateToFamily(visibleIds, rootId) {
    familyStack.push({ ids: visibleIds, root: rootId });
    showFamily(visibleIds);
    showConnections(rootId);
}

function showFamily(visibleIds) {
    allFamilies.forEach(id => {
        const element = document.getElementById(id);
        if (visibleIds.includes(id)) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }); // Closing parentheses for forEach loop



    allFamilies.forEach(id => {
        const element = document.getElementById(id);
        if (visibleIds.includes(id)) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }); // Closing parentheses and curly brace for the second forEach loop
}


function showConnections(rootId) {
    // Hide all connection lines
    Object.values(connections).forEach(lines => {
        lines.forEach(line => line.style.display = 'none');
    });

    // Show only relevant lines for the current view
    if (connections[rootId]) {
        connections[rootId].forEach(line => line.style.display = 'block');
    }
}

document.getElementById('homeButton').addEventListener('click', function() {
    // Clear the family stack and navigate back to the initial state (Durga Dutt)
    familyStack.length = 0;
    navigateToFamily(['durgaFamily'], 'durga');
});



// animation 

function updateTime() {
    var now = new Date();
    var day = now.toLocaleDateString(undefined, { weekday: 'long' });
    var date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    var time = now.toLocaleTimeString();
    document.getElementById('day').textContent = day;
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Call updateTime() initially to display time and date immediately
updateTime();

// Call updateTime() every second to update time and date continuously
setInterval(updateTime, 1000);
  
  