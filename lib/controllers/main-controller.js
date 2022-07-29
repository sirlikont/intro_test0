const oneLinerJoke = require('one-liner-joke');

function getHello(ctx) {
    ctx.body = {
        text: 'Hello world!'
    };
}

function getHelloCustom(ctx) {
    const query = ctx.request.query;
    
    ctx.body = {
        text: `Hello from ${query.city}!`
    }
}

function getHelloMars(ctx) {
    ctx.body = {
        text: 'Hello Mars!'
    };
}

function getJoke (ctx) {
    const randomJoke = oneLinerJoke.getRandomJoke({
        exclude_tags: ['dirty', 'racist', 'marriage']
        });

    ctx.body = {
        joke: randomJoke.body,
        poweredBy: "one-liner-joke"
    }
};

function getHelloEesti(ctx) {
    ctx.body = {
        text: `Tere Eesti!`
    }
}

function getNoYou(ctx) {
const query = ctx.request.query;
    
ctx.body = {
    text: `No you ${query.word}!`
}
}

function getAdd(ctx) {
    const query = ctx.request.query;

        
    ctx.body = {
        text: Number(query.number1) + Number(query.number2)
    }
    }


module.exports = {getHello, getHelloMars, getJoke, getHelloCustom, getHelloEesti, getNoYou, getAdd};