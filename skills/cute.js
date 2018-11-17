module.exports = {
    cats : [
        'https://i.imgur.com/Qbg7CeM.jpg',
        'https://i.imgur.com/nUzkpJY.jpg',
        'https://i.imgur.com/NpDcKph.jpg',
        'https://i.imgur.com/oJtSDaO.jpg',
        'https://i.redd.it/82ajpsrd17111.jpg',
        'https://i.redd.it/00km1d2rt0111.jpg',
        'https://i.redd.it/rdbavhp0y7111.jpg',
        'https://i.redd.it/5hn3mg0n98111.jpg',
        'https://i.redd.it/d23pb8mta6111.jpg',
        'https://i.redd.it/d2gyrwgy7oz01.jpg',
        'https://i.redd.it/z4sgl84q72z01.jpg',
        'https://i.redd.it/wvykzo8n1cy01.jpg'
    ],
 
    dogs : [
        'https://i.redd.it/6tjihi2qe7111.jpg',
        'https://i.imgur.com/etRCs56.jpg',
        'https://i.redd.it/nibw50f8y4111.jpg',
        'https://i.redd.it/izcvnvj1o7111.jpg',
        'https://i.redd.it/eqs1g9dldz011.jpg',
        'https://i.redd.it/civ9dnu9u1111.jpg',
        'https://i.redd.it/kk03qwclkp011.jpg',
        'https://i.redd.it/2694pupjne011.jpg',
        'https://i.redd.it/qk49ls5y6oy01.jpg',
        'https://i.imgur.com/oM3mKgB.jpg',
        'https://i.redd.it/8kx2riaulux01.jpg'
    ]
};


module.exports = function (controller) 
{
    
    controller.hears(['cute pics'], 'direct_message,direct_mention', function (bot, message)
    {
        bot.startConversation(message, function (err, convo) 
        {
            convo.ask('Do you like cats or do you like dogs?', function (response, convo)
            {
                convo.say(response.text);
                if(response.text.trim() == 'dogs')
                {
                    convo.say('Here is your cute doggo!');
                    convo.next();
                }
                else if (response.text == 'cats')
                {
                    bot.reply(message,{'Here is your cutey kitty!', cats:[Math.random()*10]});
                    convo.next();
                }
                else 
                {
                    convo.say('Did not recognise the task, please try again.');
                    convo.next();

                }

            });
        });
    });
}