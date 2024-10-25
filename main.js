function prepareFunction(func) {
    // Ersetze ^ durch Math.pow() für die Evaluierung
    return func.replace(/(\w+)\^(\d+)/g, 'Math.pow($1, $2)');
}

function drawGraph() {
    const func = prepareFunction(document.getElementById("function").value);
    const xValues = [];
    const yValues = [];
    
    for (let x = -10; x <= 10; x += 0.1) {
        xValues.push(x);
        try {
            yValues.push(eval(func.replace(/x/g, x)));
        } catch (e) {
            alert("Ungültige Funktion. Bitte überprüfe die Eingabe.");
            return;
        }
    }

    const trace = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter',
    };

    const data = [trace];

    const layout = {
        paper_bgcolor: 'black', 
        plot_bgcolor: 'black',  
        font: {
            color: 'white' 
        }
    };

    Plotly.newPlot('graph', data, layout);
}