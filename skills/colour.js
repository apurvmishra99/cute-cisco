module.exports = function (controller) {

    controller.hears(['colour', 'color'], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say('This is a Botkit conversation sample.');

            convo.ask('What is your favorite colour?', function (response, convo) {
                convo.say('Cool, I like ' + response.text + ' too!');
                convo.next();
            });
        });
    });
};