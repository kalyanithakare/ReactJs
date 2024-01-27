const heading=

/*React.createElement("h1",{
    id:"heading",
    xyz:"abc",

},"Hello world from react!"); */


//Requirement 2


/* React.createElement(
    "div",
    {
    id:"parent",
    },
    React.createElement("div",
    {
        id:"child",
    }
    
    ,
    React.createElement("h1",{},"I am tag h1"))); */

//requirement 3 sibling h1 and h2

React.createElement(
    "div",
    {
    id:"parent",
    },
    React.createElement("div",
    {
        id:"child",
    }
    
    ,
    [
    React.createElement("h1",{},"I am tag h1"),
    React.createElement("h2",{},"I am tag h2")
    ]
    
    ));

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

    //Requirement 3 siblimg child 1 and child 2

    React.createElement(
        "div",
        {
        id:"parent",
        },
        [
        React.createElement("div",
        {
            id:"child1",
        },
        [
        React.createElement("h1",{},"I am tag h1"),
        React.createElement("h2",{},"I am tag h2"),
        ]),
        React.createElement("div",
        {
            id:"child2",
        },
        [
        React.createElement("h1",{},"I am tag h1"),
        React.createElement("h2",{},"I am tag h2"),
        ]),
        ]);


