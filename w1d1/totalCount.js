class UtilClass {
    totalCount(numArr) {
        let sum = 0;
        for(let i = 0; i < numArr.length; i++) {
            sum += numArr[i];
        }
        return sum;
    }

    printMessages(messages) {
        for(let i = 0; i < messages.length; i++) {
            console.log(messages[i])
        }
    }
}


console.log("Hello World")

var messagesPerDay = [5, 8, 6]
var messages = ["Please call back!", "Make sure you install jdk", "Help debug please!"]

var newBot = new UtilClass()

console.log(newBot.totalCount(messagesPerDay));
newBot.printMessages(messages);