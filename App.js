const Pet = (props) => {              // If the paranthesis is empty that means it is not passing
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};

// We can use de-structuring like:- The output screen will be show the same thing

// const Pet = ({name, animal, breed}) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, name),
//         React.createElement("h2", {}, animal),
//         React.createElement("h2", {}, breed)
//     ]);
// }



const App = () => {
    return React.createElement("div",{id:"something-important"},[
        React.createElement("h1", {}, "AdoptMe!"),
        // Re-Usability, we use above Pet component multiple times
        React.createElement(Pet, {name : "Luna", animal : "Dog", breed : "Havanese"}),
        React.createElement(Pet, {name : "Peppar", animal : "Bird", breed : "Cocateil"}),
        React.createElement(Pet, {name : "Doink", animal : "Cat", breed : "Mixed"})
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));