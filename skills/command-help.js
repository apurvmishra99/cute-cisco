//
// Command: help
//
module.exports = function (controller) {

    controller.hears(["help", "who"], 'direct_message,direct_mention', function (bot, message) {
        var text = "Here are my skills:";
        text += "\n- " + bot.enrichCommand(message, "Awww Pics") + ": sends a cute dog or cat picture as per users choice";
        text += "\n- " + bot.enrichCommand(message, ".commons") + ": shows metadata about myself";
        text += "\n- " + bot.enrichCommand(message, "help") + ": spreads the word about my skills";
        bot.reply(message, text);
    });
}
