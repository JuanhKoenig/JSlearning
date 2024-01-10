const days = [ "sunday", "monday", "tuesday", "wendsday", "thursday", "fryday", "saturday"];

function finder (userImput) {

    let userImput = prompt("what day is it today?");

    switch (userImput) {
        case "sunday":
            alert(`Have a great ${userImput}!` )

        case "monday": 
            alert(`Have a great start of the weekend!` )
        
        case "tuesday": 
            alert(`Have a great ${userImput}!` )

        case "wensday":
            alert(`You're doing great, enjoy this ${userImput}!` )

        case "thursday":
            alert(`Have a great ${userImput}, keep at it!` )

        case "fryday":
            alert(`It's almost the weekend!` )

        case "saturday":
            alert(`Enjoy your free time, you earned it!` )

        
    }
}